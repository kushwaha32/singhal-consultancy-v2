import Supercomponent from "../../components/Admin/superComponent/Supercomponent";
import "./css/thefirm.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  deleteassociatesEmpty,
  updateassociates,
} from "../../actions/associatesAction";
import { storage } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const AssociatesEdit = () => {
  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [image, setImage] = useState("");
  const [education, setEducation] = useState("");
  const [preview, setPreview] = useState();
  const [loading, setLoading] = useState(false);
  const associatesGet = useSelector((state) => state.associatesData);
  const { associatesAll } = associatesGet;
  const { id } = useParams();
  const filterdata = associatesAll.data.find((item) => item._id === id);
  useEffect(() => {
    console.log(filterdata);
    if (filterdata) {
      setName(filterdata.name);
      setDiscription(filterdata.discription);
      setEducation(filterdata.education);
    }
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(filterdata.image);
    }
  }, [filterdata, associatesAll.data, image]);

  const dispatch = useDispatch();
  dispatch(deleteassociatesEmpty());
  const associatesupdat = useSelector((state) => state.associatesUpdate);
  const { error, associatesUpdate } = associatesupdat;
  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    let formData = {
      name: name,
      discription: discription,
      education: education,
      imgUrl: "",
    };
    if (image) {
      let nameArry = image.name.split(".");
      let nameWext = nameArry[0];
      let nameExt = nameArry[1];
      const imageName = nameWext + uuidv4() + "." + nameExt;
      const storageRef = ref(storage, `/files/${imageName}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on("state_changed", () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          formData.imgUrl = url;
          dispatch(updateassociates(formData, id))
            .then(() => {
              suErr("success", "The firm created successfully");
              setLoading(false);
            })
            .catch((err) => {
              setLoading(false);
              suErr("error", "Something went wrong");
            });
        });
      });
    } else {
      dispatch(updateassociates(formData, id))
        .then(() => {
          suErr("success", "The firm created successfully");
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          suErr("error", "Something went wrong");
        });
    }
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
  return (
    <>
      <Supercomponent>
        {associatesUpdate && associatesUpdate.success
          ? suErr("success", "Resource updated successfully")
          : error && error.success === false
          ? suErr("error", "Something went wrong")
          : ""}

        <div className="card card-primary box box-primary mt-4">
          <div className="card-header">
            <h3 className="card-title">Edit Area of Expertise</h3>
          </div>
          {/* /.card-header */}
          {/* form start */}
          <form onSubmit={submitForm}>
            <div className="row">
              <div className="col-md-8">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      id="name"
                      placeholder="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="education">education</label>
                    <input
                      type="text"
                      name="education"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      className="form-control"
                      id="education"
                      placeholder="education"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Discription</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={discription}
                      onReady={(editor) => {
                        // this initializes our application //
                      }}
                      config={{
                        ckfinder: {
                          uploadUrl: "/ckimgUpload",
                        },
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setDiscription(data);
                      }}
                    />
                  </div>
                </div>
                {/* /.card-body */}
              </div>
              <div className="col-md-4">
                <div className="border border-top-0 border-right-0 border-bottom-0">
                  <div className="uppend-img-parend">
                    <h4 className="mt-4 p-3 pro-side-h">Featured Image </h4>
                    <div className="px-3 mt-3">
                      <div className="custom-file mb-3">
                        <input
                          type="file"
                          className="custom-file-input inputFileGet"
                          id="customFile"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              setImage(file);
                            } else {
                              setImage(null);
                            }
                          }}
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="customFile"
                        >
                          Choose file
                        </label>
                      </div>
                      <div id="img-target-append">
                        <img
                          src={preview}
                          className="img-thumbnail"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button
                    type="submit"
                    className="submit_btn_recog admin_sub_btn mb-2"
                  >
                    {loading ? (
                      <div className="spinner-border" role="status">
                        <span className="sr-only" />
                      </div>
                    ) : (
                      "Update"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Supercomponent>
    </>
  );
};

export default AssociatesEdit;
