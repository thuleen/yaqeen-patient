import React, { useState } from "react";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { GetPatientSamples, getPatSamples } from "../redux-saga/actions";

type FormValues = {
  socialId: string;
};

const schema = Yup.object().shape({
  socialId: Yup.string().required("Please key in your Nric or Passport number"),
});

const LoginForm = () => {
  const [idType, setIdType] = useState<string>("Nric");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const handleLogin = (payload: GetPatientSamples) =>
    dispatch(getPatSamples(payload));

  const handleIdTypeChange = (event: SelectChangeEvent) => {
    setIdType(event.target.value as string);
  };

  const onSubmit = handleSubmit((data: any) => {
    handleLogin({ ...data, idType });
  });

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "0.5rem",
        borderRadius: "5px",
      }}
    >
      <form id="login-form" onSubmit={onSubmit}>
        {idType === "Nric" ? (
          <Controller
            name="socialId"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <FormControl fullWidth margin="normal" variant="standard">
                <Input
                  id="socialId"
                  inputProps={{
                    type: "number",
                    inputMode: "numeric",
                  }}
                  {...field}
                  startAdornment={
                    <InputAdornment position="start">
                      <Select
                        id="id-select"
                        value={idType}
                        onChange={handleIdTypeChange}
                      >
                        <MenuItem
                          style={{ border: "0pt solid white" }}
                          value="Nric"
                        >
                          NRIC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </MenuItem>
                        <MenuItem value="Passport">Passport</MenuItem>
                      </Select>
                    </InputAdornment>
                  }
                />
              </FormControl>
            )}
          />
        ) : (
          <Controller
            name="socialId"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <FormControl fullWidth margin="normal" variant="standard">
                <Input
                  id="socialId"
                  {...field}
                  startAdornment={
                    <InputAdornment position="start">
                      <Select
                        id="id-select"
                        value={idType}
                        onChange={handleIdTypeChange}
                      >
                        <MenuItem
                          style={{ border: "0pt solid white" }}
                          value="Nric"
                        >
                          NRIC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </MenuItem>
                        <MenuItem value="Passport">Passport</MenuItem>
                      </Select>
                    </InputAdornment>
                  }
                />
              </FormControl>
            )}
          />
        )}
        {errors.socialId ? (
          <FormHelperText error={true}>
            {errors.socialId?.message}
          </FormHelperText>
        ) : null}
      </form>
    </div>
  );
};
export default LoginForm;
