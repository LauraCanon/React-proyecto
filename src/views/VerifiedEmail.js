import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { verifiedEmail } from "../store/userSlicer/verfyEmail";

export default function VerifiedEmail() {
  const { id, hash } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(verifiedEmail(id, hash));
    navigate(`/sessionlogin`);
  }, []);
  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
}
