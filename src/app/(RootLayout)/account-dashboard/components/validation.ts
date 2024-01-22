import dayjs from "dayjs";
import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export type UserData = {
    name: string;
    dob?: string | undefined | null;
    gender: string;
    phoneNumber: string;
    email: string;
    image?: string | null;
    isEdit?: boolean;
};

export const values:UserData = {
    name: "",
    dob: "",
    gender: "",
    phoneNumber: "",
    email: "",
    image: "",
    isEdit: false
};

export const schemaValidation: Yup.ObjectSchema<UserData> = Yup.object({
    image: Yup.string(),
    isEdit: Yup.boolean(),
    name: Yup.string().required("Nama tidak boleh kosong"),
    email: Yup.string().email("Format email salah").required("Email tidak boleh kosong"),
    gender: Yup.string().required("Pilih salah satu"),
    phoneNumber: Yup.string().matches(phoneRegExp, "Nomor tidak valid").required("Nomor HP tidak boleh kosong"),
    dob: Yup.string().test(
        "dob",
        "Minimal umur adalah 15 tahun",
        value => {
            return dayjs().diff(dayjs(value), "years") >= 15;
        }
    ).required("Tanggal Lahir tidak boleh kosong")
});