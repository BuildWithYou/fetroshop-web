"use client";
import Button from "@/src/components/global/Button";
import Input from "@/src/components/global/Input";
import InputImage from "@/src/components/global/Input/InputImage";
import Select from "@/src/components/global/Select";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import defaultImage from "@/public/images/profile-default.jpg";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserData, schemaValidation, values } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import {
  ProfileState,
  setDob,
  setEmail,
  setGender,
  setImage,
  setName,
  setPhoneNumber,
  toggleEdit,
} from "@/src/redux/slicers/profileSlice";
import ModalPopup from "@/src/components/global/Modal/ModalPopup";

const TabProfile = () => {
  const dispatch = useDispatch();

  const defaultValue = useSelector(
    (state: { profile: ProfileState }) => state?.profile
  );
  const [lastImage, setLastImage] = useState<string>(defaultValue.image);
  const [imageSource, setImageSource] = useState<File | null>(null);
  const [errorModal, setErrorModal] = useState({
    title: "",
    open: false,
    isFailed: false,
    message: "",
  });

  const {
    setValue,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<UserData>({
    mode: "onChange",
    defaultValues: values,
    resolver: yupResolver(schemaValidation),
  });

  const fileInput = useRef<HTMLInputElement>(null);

  const convertImage = (files: FileList | null) => {
    if (files) {
      setLastImage(defaultValue.image);
      const fileSize = files[0]?.size / 1024;
      const fileType = files[0]?.type;
      const isImageType: boolean = /^image\//.test(fileType);
      if (fileSize <= 5120 && isImageType) {
        setImageSource(files[0]);
        const render = new FileReader();
        render.readAsDataURL(files[0]);
        render.onload = () => {
          const result: string | null = render.result as string;
          dispatch(setImage(result));
        };
      } else {
        if (fileSize > 5120) {
          setErrorModal({
            open: true,
            isFailed: true,
            title: "Oops! File terlalu besar",
            message:
              "File terlalu besar. tolong upload gambar tidak lebih dari 5mb",
          });
        } else if (!isImageType) {
          setErrorModal({
            open: true,
            isFailed: true,
            title: "Oops! Format yang di upload tidak sesuai",
            message:
              "Pilih file yang sesuai. Hanya bisa menerima file gambar dengan type PNG/JPG.",
          });
        }
      }
    }
  };

  const onEdit = () => {
    dispatch(toggleEdit());
    setValue("isEdit", !defaultValue.isEdit);
  };

  const onReset = () => {
    setValue("dob", defaultValue.dob);
    setValue("name", defaultValue.name);
    setValue("email", defaultValue.email);
    setValue("gender", defaultValue.gender);
    setValue("image", defaultValue.image);
    setValue("phoneNumber", defaultValue.phoneNumber);
  };

  const onCancelEdit = () => {
    onEdit();
    dispatch(setImage(lastImage));
    onReset();
  };

  const onSubmitForm: SubmitHandler<UserData> = (data) => {
    const newData = {
      ...data,
      image: imageSource,
    };

    dispatch(setName(data.name));
    dispatch(setDob(data.dob ?? ""));
    dispatch(setEmail(data.email));
    dispatch(setGender(data.gender));
    dispatch(setPhoneNumber(data.phoneNumber));

    setErrorModal({
      isFailed: false,
      open: true,
      message: "Data berhasil diubah dan disimpan",
      title: "Perubahan berhasil!",
    });

    onEdit();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="flex md:flex-row lg:flex-row flex-col md:gap-5 gap-10 justify-center">
          <div
            className={`mx-auto max-h-64 flex flex-col items-center w-fill min-w-32`}
          >
            <div className="relative p-0 m-0">
              <Image
                src={defaultValue.image || defaultImage}
                alt="profile-image"
                width={200}
                height={200}
                className="rounded-full w-32 h-32 md:h-24 md:w-24 object-cover"
              />
            </div>

            {defaultValue.isEdit && (
              <div className="p-0 mt-5">
                <InputImage
                  inputRef={fileInput}
                  onChange={(e) => convertImage(e.target.files)}
                />
              </div>
            )}
          </div>
          <div>
            <div className="mb-3">
              <div className="font-bold text-lg">Data Diri</div>
              <div className="grid md:grid-cols-3 sm:grid-cols-1 items-center mt-3 md:gap-y-5 gap-y-1 gap-x-3">
                <Column
                  label="Nama"
                  inputElement={
                    <Controller
                      control={control}
                      name="name"
                      render={({ field: { onChange, value } }) => (
                        <Input
                          type="text"
                          value={value}
                          onChange={(e) => {
                            onChange(e.target.value);
                          }}
                          readOnly={!defaultValue.isEdit}
                          error={errors.name}
                          helperText={errors.name?.message}
                        />
                      )}
                    />
                  }
                />

                <Column
                  label="Tanggal Lahir"
                  inputElement={
                    <Controller
                      name="dob"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Input
                          onChange={(e) => onChange(e.target.value)}
                          type="date"
                          readOnly={!defaultValue.isEdit}
                          value={value ?? ""}
                          error={errors.dob}
                          helperText={errors.dob?.message}
                        />
                      )}
                    />
                  }
                />

                <Column
                  label="Jenis Kelamin"
                  inputElement={
                    <Controller
                      name="gender"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          onChange={(e) => onChange(e.target.value)}
                          readOnly={!defaultValue.isEdit}
                          value={value}
                          options={[
                            { label: "Pilih Jenis Kelamin" },
                            { label: "Laki-Laki", value: "Laki-Laki" },
                            { label: "Perempuan", value: "Perempuan" },
                          ]}
                          error={errors.gender}
                          helperText={errors.gender?.message}
                        />
                      )}
                    />
                  }
                />
              </div>
            </div>

            <div className="mb-5">
              <div className="font-bold text-lg">Data Kontak</div>
              <div className="grid md:grid-cols-3 sm:grid-cols-1 items-center mt-3 md:gap-y-5 gap-y-1 gap-x-3">
                <Column
                  label="Nomor Handphone"
                  inputElement={
                    <Controller
                      control={control}
                      name="phoneNumber"
                      render={({ field: { onChange, value } }) => (
                        <Input
                          type="text"
                          readOnly={!defaultValue.isEdit}
                          onChange={(e) => onChange(e.target.value)}
                          value={value}
                          error={errors.phoneNumber}
                          helperText={errors.phoneNumber?.message}
                        />
                      )}
                    />
                  }
                />

                <Column
                  label="Email"
                  inputElement={
                    <Controller
                      control={control}
                      name="email"
                      render={({ field: { onChange, value } }) => (
                        <Input
                          type="email"
                          name="email"
                          readOnly={!defaultValue.isEdit}
                          onChange={(e) => onChange(e.target.value)}
                          value={value}
                          error={errors.email}
                          helperText={errors.email?.message}
                        />
                      )}
                    />
                  }
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-4">
              {!defaultValue.isEdit ? (
                <Button
                  type="button"
                  width="full"
                  variant="primary"
                  onClick={onEdit}
                >
                  Ubah
                </Button>
              ) : (
                <>
                  <Button
                    width="full"
                    type="button"
                    onClick={onCancelEdit}
                    variant={"outlinePrimary"}
                  >
                    Batal
                  </Button>
                  <Button width="full" variant="primary" type="submit">
                    Simpan
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
      <ModalPopup
        open={errorModal.open}
        message={errorModal.message}
        onClose={() => setErrorModal({ ...errorModal, open: false })}
        title={errorModal.title}
        variant={errorModal.isFailed ? "error" : "success"}
      />
    </>
  );
};

type TypographyProps = {
  children: string;
};

export const Typography: React.FC<TypographyProps> = ({ children }) => {
  return <div className="text-md w-fill">{children}</div>;
};

type ColumnProps = {
  label: string;
  inputElement: React.ReactNode;
};

const Column: React.FC<ColumnProps> = ({ label, inputElement }) => {
  return (
    <>
      <Typography>{label}</Typography>
      <div className="md:col-span-2 mb-3 md:mb-0">{inputElement}</div>
    </>
  );
};

export default TabProfile;
