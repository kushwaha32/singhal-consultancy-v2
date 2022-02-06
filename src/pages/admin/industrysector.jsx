import Supercomponent from "../../components/Admin/superComponent/Supercomponent";
import "./css/thefirm.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Parser from "html-react-parser";
import Loader from "../../components/loader/loader";
import Swal from "sweetalert2";
import {
  deleteindustrysector,
  deleteindustrysectorEmpty,
  getindustrysector,
  updateindustrysectorEmpty,
} from "../../actions/industrysectorAction";

const IndustrySector = () => {
  const dispatch = useDispatch();
  const industrysectorDAta = useSelector((state) => state.industrysectorData);
  const { loading, error, industrysectorAll } = industrysectorDAta;
  const industrysectorRemove = useSelector(
    (state) => state.industrysectorDelete
  );
  const { industrysectorDelete } = industrysectorRemove;
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
        dispatch(deleteindustrysector(id)).then(() => {
          dispatch(getindustrysector());
        });
      }
    });
  };

  useEffect(() => {
    dispatch(getindustrysector());
    dispatch(updateindustrysectorEmpty());
    dispatch(deleteindustrysectorEmpty());

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
      {industrysectorDelete && industrysectorDelete.success
        ? suErr("success", "Resource removed successfully")
        : industrysectorRemove.error &&
          industrysectorRemove.error.success === false
        ? suErr("error", "Something went wrong")
        : ""}
      <Supercomponent>
        <div className="row pt-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Industry Sector</h3>
                <div className="card-tools">
                  <Link
                    to="/admin/industrysector/create"
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
                      {industrysectorAll.data?.map((el, i) => {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>

                            <td>
                              <p>{el.title}</p>
                            </td>
                            <td>
                              <p>{Parser(el.discription)}</p>
                            </td>
                            <td>
                              <span className="tag tag-success">
                                <img
                                  src={el.image}
                                  alt=""
                                  style={{ width: "137px" }}
                                />
                              </span>
                            </td>
                            <td>
                              <Link
                                to={`/admin/industrysetor/edit/${el._id}`}
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

export default IndustrySector;
