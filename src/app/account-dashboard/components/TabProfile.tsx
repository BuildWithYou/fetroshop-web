"use client";
import Button from "@/src/components/global/Button";
import Input from "@/src/components/global/Input";
import Select from "@/src/components/global/Select";
import { formatDate } from "@/src/helpers/date";
import { PencilIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface TabProfileProps {}

type UserData = {
  name: string;
  dob: string;
  gender: string;
  married: string;
  phoneNumber: string;
  email: string;
};

type UserProperty = keyof UserData;

const TabProfile: React.FC<TabProfileProps> = ({}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState<Record<UserProperty, string>>({
    name: "Mitro Ubadillah",
    dob: "1998-04-12",
    gender: "Laki-Laki",
    married: "Belum Menikah",
    phoneNumber: "081332725004",
    email: "example@gmail.com",
  });

  const onEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const onHandleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex md:flex-row lg:flex-row flex-col gap-7 justify-center">
      <div className="p-3 max-h-40 mx-auto">
        <div className="h-32 w-32 bg-gray-800 rounded-full"></div>
      </div>
      <form>
        <div className="mb-3">
          <div className="font-bold text-lg">Data Diri</div>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 items-center mt-3 md:gap-y-5 gap-y-1 gap-x-3">
            <Column
              label="Nama"
              inputElement={
                <Input
                  type="text"
                  name="nama"
                  value={formData.name}
                  readOnly={!isEdit}
                  onChange={(e) => onHandleInputChange("nama", e.target.value)}
                />
              }
            />

            <Column
              label="Tanggal Lahir"
              inputElement={
                <Input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={(e) => onHandleInputChange("dob", e.target.value)}
                  readOnly={!isEdit}
                />
              }
            />

            <Column
              label="Jenis Kelamin"
              inputElement={
                <Select
                  onChange={(value) => onHandleInputChange("gender", value)}
                  value={formData.gender}
                  readOnly={!isEdit}
                  options={[
                    { label: "Laki-Laki", value: "Laki-Laki" },
                    { label: "Perempuan", value: "Perempuan" },
                  ]}
                />
              }
            />

            <Column
              label="Status Perkawinan"
              inputElement={
                <Select
                  onChange={(e) => onHandleInputChange("married", e)}
                  value={formData.married}
                  readOnly={!isEdit}
                  options={[
                    { label: "Belum Menikah", value: "Belum Menikah" },
                    { label: "Sudah Menikah", value: "Sudah Menikah" },
                  ]}
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
                <Input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  readOnly={!isEdit}
                  onChange={(e) =>
                    onHandleInputChange("phoneNumber", e.target.value)
                  }
                />
              }
            />

            <Column
              label="Email"
              inputElement={
                <Input
                  type="email"
                  name="email"
                  readOnly={!isEdit}
                  value={formData.email}
                  onChange={(e) => onHandleInputChange("email", e.target.value)}
                />
              }
            />
          </div>
        </div>
        <div className="flex gap-4">
          {!isEdit ? (
              <Button type="button" width="full" variant="primary" onClick={onEdit}>Ubah</Button>
          ) : (
            <>
              <Button
                width="full"
                type="button"
                onClick={onEdit}
                variant={"outlinePrimary"}
              >
                Batal
              </Button>
              <Button width="full" variant="primary" onClick={onEdit}>Simpan</Button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

type TypographyProps = {
  children: string;
};

const Typography: React.FC<TypographyProps> = ({ children }) => {
  return <div className="text-md w-fill">{children}</div>;
};

type ColumnProps = {
  label: string;
  inputElement: React.ReactNode;
};

const Column: React.FC<ColumnProps> = ({ label, inputElement }) => {
  return (
    <React.Fragment>
      <Typography>{label}</Typography>
      <div className="md:col-span-2 mb-3 md:mb-0">{inputElement}</div>
    </React.Fragment>
  );
};

export default TabProfile;
