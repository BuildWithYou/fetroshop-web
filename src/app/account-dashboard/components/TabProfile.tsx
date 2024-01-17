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
    <div className="flex gap-7">
      <div className="border border-gray-300 rounded-lg p-3 max-h-40">
        <div className="h-32 w-32 bg-gray-800 rounded-full"></div>
      </div>
      <form className="w-full">
        <div className="mb-3">
          <div className="font-bold text-lg">Data Diri</div>
          <table className="table-auto">
            <tbody>
              <tr>
                <td className={`py-5 pr-3`}>
                  <Typography>Nama</Typography>
                </td>
                <td>
                  <Input
                    type="text"
                    name="nama"
                    value={formData.name}
                    readOnly={!isEdit}
                    onChange={(e) =>
                      onHandleInputChange("nama", e.target.value)
                    }
                  />
                </td>
              </tr>

              <tr>
                <td className={`py-5 pr-3`}>
                  <Typography>Tanggal Lahir</Typography>
                </td>
                <td>
                  <Input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={(e) => onHandleInputChange("dob", e.target.value)}
                    readOnly={!isEdit}
                  />
                </td>
              </tr>

              <tr>
                <td className={`"py-5 pr-3`}>
                  <Typography>Jenis Kelamin</Typography>
                </td>
                <td>
                  <Select
                    onChange={(value) => onHandleInputChange("gender", value)}
                    value={formData.gender}
                    readOnly={!isEdit}
                    options={[
                      { label: "Laki-Laki", value: "Laki-Laki" },
                      { label: "Perempuan", value: "Perempuan" },
                    ]}
                  />
                </td>
              </tr>

              <tr>
                <td className={`py-5 pr-3`}>
                  <Typography>Status Perkawinan</Typography>
                </td>
                <td>
                  <Select
                    onChange={(e) => onHandleInputChange("married", e)}
                    value={formData.married}
                    readOnly={!isEdit}
                    options={[
                      { label: "Belum Menikah", value: "Belum Menikah" },
                      { label: "Sudah Menikah", value: "Sudah Menikah" },
                    ]}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-3">
          <div className="font-bold text-lg">Data Kontak</div>
          <table className="table-auto">
            <tbody>
              <tr>
                <td className={`py-5 pr-3`}>
                  <Typography>Nomor Handphone</Typography>
                </td>
                <td>
                  <Input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      onHandleInputChange("phoneNumber", e.target.value)
                    }
                  />
                </td>
              </tr>

              <tr>
                <td className={`py-5 pr-3`}>
                  <Typography>Email</Typography>
                </td>
                <td>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      onHandleInputChange("email", e.target.value)
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex gap-4">
          {!isEdit ? (
            <Button type="button" width="full" onClick={onEdit}>Ubah</Button>
          ) : (
            <>
              <Button type="button" width="full" onClick={onEdit} variant={"outlinePrimary"}>Batal</Button>
              <Button width="full">Simpan</Button>
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

export default TabProfile;
