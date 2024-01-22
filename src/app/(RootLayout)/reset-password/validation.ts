import * as Yup from "yup";

export interface ResetPasswordState {
    password?: string | null | undefined,
    confirmPassword?: string | null | undefined,
};

export const defaultValues: ResetPasswordState = {
    password: "",
    confirmPassword: ""
};

export const schemaValidation: Yup.ObjectSchema<ResetPasswordState> = Yup.object({
    password: Yup.string().min(8, "Kata sandi minimal harus 8 karakter").
    matches(/^(?=.*[a-z])/, "Harus terdiri dari huruf a-z").
    matches(/^(?=.*[A-Z])/, "Harus mengandung huruf kapital").
    matches(/^(?=.*[0-9])/, "Harus mengandung angka").
    matches(/^(?=.*[!@#$%&])/, "Harus mengandung Simbol !,@,#,$,%,&").
    required("Kolom wajib disisi"),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), ""], "Kata sandi tidak cocok"
    ).required(),
});