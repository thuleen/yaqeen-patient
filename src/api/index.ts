import axios from "axios";
import * as Type from "../redux-saga/actions";

const getPatientSamples = async (payload: {
  idType: string;
  socialId: string;
}) => {
  try {
    const { data } = await axios.post<Type.GetPatientSamples>(
      `${import.meta.env.VITE_APP_API_URL}/get-patient-samples`,
      {
        password: import.meta.env.VITE_APP_PWD,
        ...payload,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    return null;
  }
};
export { getPatientSamples };
