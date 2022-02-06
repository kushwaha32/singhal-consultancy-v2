import Supercomponent from "../../components/Admin/superComponent/Supercomponent";
import "./css/thefirm.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Parser from "html-react-parser";
import Loader from "../../components/loader/loader";
import Swal from "sweetalert2";
import {
  deleteareaofexpertise,
  deleteareaofexpertiseEmpty,
  getareaofexpertise,
  updateareaofexpertiseEmpty,
} from "../../actions/areaofexpertiseAction";

const Areaofexpertise = () => {
  const dispatch = useDispatch();
  const areaofexpertiseDAta = useSelector((state) => state.areaofexpertiseData);
  const { loading, error, areaofexpertiseAll } = areaofexpertiseDAta;
  const areaofexpertiseRemove = useSelector(
    (state) => state.areaofexpertiseDelete
  );
  const { areaofexpertiseDelete } = areaofexpertiseRemove;
  const onDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel !",
      closeOnConfirm: false,
      closeOnCancel: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteareaofexpertise(id)).then(() => {
          dispatch(getareaofexpertise());
        });
      }
    });
  };

  useEffect(() => {
    dispatch(getareaofexpertise());
    dispatch(updateareaofexpertiseEmpty());
    dispatch(deleteareaofexpertiseEmpty());

    // eslint-disable-next-line
  }, [dispatch]);

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
      {areaofexpertiseDelete && areaofexpertiseDelete.success
        ? suErr("success", "Resource removed successfully")
        : areaofexpertiseRemove.error &&
          areaofexpertiseRemove.error.success === false
        ? suErr("error", "Something went wrong")
        : ""}
      <Supercomponent>
        <div className="row pt-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">The Firm</h3>
                <div className="card-tools">
                  <Link
                    to="/admin/areaofexpertise/create"
                    className="btn btn-tool btn-sm plus_btn_admin"
                  >
                    <span>+</span>
                  </Link>
                </div>
              </div>

              {/* /.card-header */}
              <div className="card-body table-responsive p-0">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th></th>
                      <th style={{ width: "121px" }}>Title</th>
                      <th style={{ width: "500px" }}>Discription</th>
                      <th>image</th>
                      <th>Link</th>
                      <th>Edit</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  {loading ? (
                    <tbody>
                      <tr>
                        <td>
                          <Loader />
                        </td>
                      </tr>
                    </tbody>
                  ) : error ? (
                    <h3>error</h3>
                  ) : (
                    <tbody>
                      {areaofexpertiseAll.data?.map((el, i) => {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>

                            <td>
                              <p>{el.title}</p>
                            </td>
                            <td>
                              <div>{Parser(el.discription)}</div>
                            </td>
                            <td>
                              <span className="tag tag-success">
                                <img
                                  src={`${el.image}`}
                                  alt=""
                                  style={{ width: "137px" }}
                                />
                              </span>
                            </td>
                            <td>{el.link}</td>
                            <td>
                              <Link
                                to={`/admin/areaofexpertise/edit/${el._id}`}
                                className="btn btn-tool btn_icon_ed"
                              >
                                <i className="fas fa-edit"></i>
                              </Link>
                            </td>
                            <td>
                              <button
                                onClick={() => onDelete(el._id)}
                                className="btn btn-tool btn_icon_ed btn_icon_ed_d "
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  )}
                </table>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
      </Supercomponent>
    </>
  );
};

export default Areaofexpertise;
