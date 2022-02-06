import Supercomponent from "../../components/Admin/superComponent/Supercomponent";
import "./css/thefirm.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteThefirmEmpty,
  updateThefirm,
} from "../../actions/thefirmActions";
import Swal from "sweetalert2";

const ThefirmUpdate = () => {
  const [discription, setDiscription] = useState("");
  const thefirmGet = useSelector((state) => state.thefirmData);
  const { thefirmAll } = thefirmGet;
  const { id } = useParams();
  const filterdata = thefirmAll.data.find((item) => item._id === id);
  useEffect(() => {
    if (filterdata) {
      setDiscription(filterdata.discription);
    }
  }, [filterdata, thefirmAll.data]);

  const dispatch = useDispatch();
  dispatch(deleteThefirmEmpty());
  const thefirmupdat = useSelector((state) => state.thefirmUpdate);
  const { loading, error, thefirmUpdate } = thefirmupdat;
  const submitForm = (e) => {
    e.preventDefault();
    const inpuData = {
      discription,
    };
    dispatch(updateThefirm(inpuData, id));
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
        {thefirmUpdate && thefirmUpdate.success
          ? suErr("success", "Resource updated successfully")
          : error && error.success === false
          ? suErr("error", "Something went wrong")
          : ""}

        <div className="card card-primary box box-primary mt-4">
          <div className="card-header">
            <h3 className="card-title">Create New The firm</h3>
          </div>
          {/* /.card-header */}
          {/* form start */}
          <form onSubmit={submitForm}>
            <div className="row">
              <div className="col-md-8">
                <div className="card-body">
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
                          name="thumbnail"
                          multiple
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
                          src="http://www.nervesandveins.com/img/tDPMH.png"
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

export default ThefirmUpdate;
