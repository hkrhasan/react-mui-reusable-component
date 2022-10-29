export const getErrorMsz = (type, value, value2) => {
    if (type == "email") {
        const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        return value == "" ? "Enter Email" : !validEmail.test(value) ? "Enter valid Email" : ""
    }
    if (type == "password") {
        return value == "" ? "Enter Password" : ""
    }
    if (type == "confirm") {
        return value == "" ? "Enter Confirm" : value != value2 ? "pawassord and confirm password is not same " : ""
    }
    if (type == "mobile") {
        return value == "" ? "Enter Mobile" : isNaN(value) ? "Mobile number is in digit" : value.length != 10 ? "Mobile number is of 10 digit" : ""
    }
    if (type == "resetP") {
        return value == "" ? "Enter resetP" : ""
    }
    if (type == "resetP") {
        return value == "" ? "Enter resetP" : ""
    }
    if (type == "gender") {
        return value == "" ? "Enter gender" : value == "default0" ? "Enter gender" : ""
    }
    if (type == "confirmResetP") {
        return value == "" ? "Enter confirmResetP" : value != value2 ? "resetP and confirmResetP password is not same " : ""
    }
    if (type == "otp") {
        return value == "" ? "Enter Otp" : value.length != 4 ? "Enter empty Otp" : value != value2 ? "Otp is not valid" : ""
    }
}