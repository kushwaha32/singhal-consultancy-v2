import "./getinvolve.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Getinvolve = () => {
  const [textArea, setTextArea] = useState();
  const [loading, setLoading] = useState(false);
  const schema = yup
    .object()
    .shape({
      name: yup.string().required("Please fill the Name"),
      email: yup.string().email().required("Please fill the Email address"),
      organization: yup.string().required("Please Provide the Organization"),
      Subject: yup.string().required("Please fill the Subject"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    data.message = textArea;
    try {
      await axios.post(
        "https://us-central1-singhal-consultancy.cloudfunctions.net/app/send_email",
        data
      );

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Thank you for your intrest.We will contact you as soon as posible.",
      });
      setLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Opps...",
        text: "Somthing went wrong try again latter.",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <div id="getInTouch"></div>
      <section
        className="container_width recongnition"
        style={{ marginTop: "120px" }}
      >
        <h3 className="heading_comman">Get In Touch With Us</h3>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Name*"
                  {...register("name")}
                />
                <span>{errors.name?.message && errors.name?.message}</span>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control "
                  placeholder="Email*"
                  {...register("email")}
                />
                <span>{errors.email?.message && errors.email?.message}</span>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Organization*"
                  {...register("organization")}
                />
                <span>
                  {errors.organization?.message && errors.organization?.message}
                </span>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Subject*"
                  {...register("Subject")}
                />
                <span>
                  {errors.Subject?.message && errors.Subject?.message}
                </span>
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  onChange={(e) => setTextArea(e.target.value)}
                  value={textArea}
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit_btn_recog"
                disabled={loading}
              >
                {loading ? (
                  <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                  </div>
                ) : (
                  "submit"
                )}
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <h5 className="get_tuch">Get In Touch</h5>
            <p className="slider_p" style={{ marginBottom: "5px" }}>
              <strong>
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </strong>
              <a
                href="mailto:info@singhalconsultancy.com"
                className="mail-color"
              >
                info@singhalconsultancy.com
              </a>
            </p>
            <p className="slider_p">
              <strong>
                <i className="fa fa-phone" aria-hidden="true"></i>
              </strong>
              +91 8979567834
            </p>
            <ul className="social_media_link">
              <li>
                {" "}
                <Link
                  to="https://www.linkedin.com/company/singhal-consultancy"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Getinvolve;
