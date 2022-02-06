import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useDispatch } from "react-redux";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

export const ImgTransfer = (formData, passfunc, setImgUrl, setPreview) => {
  const dispatch = useDispatch();
  let nameArry = formData.image.name.split(".");
  let nameWext = nameArry[0];
  let nameExt = nameArry[1];
  const imageName = nameWext + uuidv4() + "." + nameExt;
  const storageRef = ref(storage, `/files/${imageName}`);
  const uploadTask = uploadBytesResumable(storageRef, formData.image);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
    },
    (err) => console.log(err),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setImgUrl(url);
        dispatch(passfunc(formData))
          .then(() => {
            suErr("success", "The firm created successfully");
          })
          .catch((err) => {
            suErr("error", "Something went wrong");
          });
      });
    }
  );
};

const suErr = (icon, msg) => {
  Swal.fire({
    toast: true,
    icon: icon,
    title: msg,
    position: "top-right",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};

export const imgPreview = (image, noimage, setPreview) => {
  if (image) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(image);
  } else {
    setPreview(noimage);
  }
};
