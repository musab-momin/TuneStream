"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import React, { useState } from "react";
import Modal from "../Modal";
import { closeModal } from "@/features/modal/modal-slice";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input";
import { Button } from "../ui/button";
import uniqueid from "uniqid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const UploadModal = () => {
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const variant = useAppSelector((state) => state.modal.variant);
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      dispatch(closeModal());
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // Upload to supabase
    try {
      setIsLoading(true);

      const songFile = values?.song?.[0];
      const imageFile = values?.image?.[0];

      if (!songFile || !imageFile || !user) {
        alert("Fill up the complete form");
        return;
      }

      const uniqID = uniqueid();

      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uniqID}`, songFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (songError) {
        setIsLoading(false);
        alert(songError?.message);
        return;
      }

      const { data: posterData, error: posterError } =
        await supabaseClient.storage
          .from("posters")
          .upload(`poster-${values.title}-${uniqID}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

      if (posterError) {
        setIsLoading(false);
        alert(posterError?.message);
        return;
      }

      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          user: user.id,
          title: values?.title,
          file_url: songData?.path,
          poster_url: posterData?.path,
          singer: values?.author,
          listeners: 0,
          music_by: values?.musicBy || "unknown",
          album: values?.album || "unknown",
          duration: "-",
        });

      if (supabaseError) {
        setIsLoading(false);
        alert(supabaseError?.message);
        return;
      }

      router.refresh();
      setIsLoading(false);

      reset();
      dispatch(closeModal());
      alert("song created");
    } catch (error: any) {
      console.error("~@@ UPLOAD ERROR >>>>", error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isModalOpen && variant === "UPLOAD"}
      title="Upload Song"
      description="Upload mp3 file"
      onChange={onChange}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
        flex
        flex-col
        gap-y-4
      "
      >
        <Input
          id="title"
          disabled={isLoading}
          placeholder={"Song title"}
          {...register("title", { required: true })}
        />
        <Input
          id="author"
          disabled={isLoading}
          placeholder={"Singer"}
          {...register("author", { required: true })}
        />
        <div>
          <div className="pb-1">Select a song file</div>
          <Input
            id="song"
            type="file"
            disabled={isLoading}
            placeholder={"Song file"}
            accept="audio/*"
            {...register("song", { required: true })}
          />
        </div>
        <div>
          <div className="pb-1">Select an image</div>
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            placeholder={"Song poster"}
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>
        <div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 hover:bg-white hover:text-[#121212]"
          >
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default UploadModal;
