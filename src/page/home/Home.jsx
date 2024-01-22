import { Card, Col, Container, Row, Table, Modal } from "react-bootstrap";

import { days, months, years, districs } from "../../helpers/Helper";
import { IoEye } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudent } from "../../redux/student/action";



import "./Home.scss";
const Home = () => {
  const year = new Date().getFullYear();
  const [modal, setModal] = useState(false);

  // hide modal ;
  const handleHideModal = () => {
    setModal(false);
  };

  // show modal ;
  const handleShowModal = () => {
    setModal(true);
  };

  // get input value ;
  const [input, setInput] = useState({
    first_name: "",
    sur_name: "",
    rool: "",
    reg: "",
    phone: "",
    email: "",
    gender: "",
    group: "",
    day: "",
    month: "",
    year: "",
    address: "",
    photo: "",
  });

  // CreateNewStudentFormSubmit handler ;
  const CreateNewStudentFormSubmit = (e) => {
    e.preventDefault();

    // Form Validaton here;
    if (
      !input.first_name ||
      !input.sur_name ||
      !input.address ||
      !input.day ||
      !input.email ||
      !input.gender ||
      !input.group ||
      !input.month ||
      !input.phone ||
      !input.reg ||
      !input.rool ||
      !input.photo
    ) {

      alert("All Fields are required");
    }else{
      alert("Data Stable here");
    }

    

  };

  // const handle change input value ;
  const handleChangeInputValue = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // get store data here;
  const { students } = useSelector((state) => state.student);
  const dispatch = useDispatch();

  // get student data ;
  useEffect(() => {
    dispatch(getAllStudent());
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            {/* Form Form Data create */}
            <Modal show={modal} onHide={handleHideModal}>
              <Modal.Header>
                <h3> Create New Student </h3>{" "}
                <button
                  className="btn btn-close"
                  onClick={handleHideModal}
                ></button>
              </Modal.Header>
              <Modal.Body className="ModalBody">
                <form onSubmit={CreateNewStudentFormSubmit}>
                  <div className="half-width">
                    <div className="label-input">
                      <label htmlFor="fname">First Name</label>
                      <input
                        type="text"
                        id="fname"
                        placeholder="First Name"
                        name="first_name"
                        value={input.first_name}
                        onChange={handleChangeInputValue}
                      />
                    </div>

                    <div className="label-input">
                      <label htmlFor="sname">Surname</label>
                      <input
                        type="text"
                        id="sname"
                        placeholder="Surame"
                        name="sur_name"
                        value={input.sur_name}
                        onChange={handleChangeInputValue}
                      />
                    </div>
                  </div>

                  <div className="half-width">
                    <div className="label-input">
                      <label htmlFor="roll"> Roll Number </label>
                      <input
                        type="text"
                        id="roll"
                        placeholder="Roll Number"
                        name="roll"
                        value={input.roll}
                        onChange={handleChangeInputValue}
                      />
                    </div>

                    <div className="label-input">
                      <label htmlFor="reg"> Reg Number </label>
                      <input
                        type="text"
                        id="reg"
                        placeholder="Reg Number"
                        name="reg"
                        value={input.reg}
                        onChange={handleChangeInputValue}
                      />
                    </div>
                  </div>

                  <div className="half-width">
                    <div className="label-input">
                      <label htmlFor="phone"> Phone Number </label>
                      <input
                        type="text"
                        id="phone"
                        placeholder="Phone Number"
                        name="phone"
                        value={input.phone}
                        onChange={handleChangeInputValue}
                      />
                    </div>

                    <div className="label-input">
                      <label htmlFor="email"> Email </label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        name="email"
                        value={input.email}
                        onChange={handleChangeInputValue}
                      />
                    </div>
                  </div>

                  {/* Gender select here */}

                  <span>Select Your Gender</span>

                  <div className="threpole-width">
                    <label htmlFor="male">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="Male"
                        onChange={handleChangeInputValue}
                      />{" "}
                      Male
                    </label>

                    <label htmlFor="Female">
                      <input
                        type="radio"
                        id="Female"
                        name="gender"
                        value="Female"
                        onChange={handleChangeInputValue}
                      />{" "}
                      Female
                    </label>

                    <label htmlFor="custom">
                      <input
                        type="radio"
                        id="custom"
                        name="gender"
                        value="Custom"
                        onChange={handleChangeInputValue}
                      />{" "}
                      Custom
                    </label>
                  </div>

                  {/* Subject group select here;  */}
                  <span>Select Subject Group</span>
                  <div className="threpole-width">
                    <label htmlFor="arts">
                      <input
                        type="radio"
                        id="arts"
                        name="group"
                        value="Arts"
                        onChange={handleChangeInputValue}
                      />{" "}
                      Arts
                    </label>

                    <label htmlFor="commerce">
                      <input
                        type="radio"
                        id="commerce"
                        name="group"
                        value="Commerce"
                        onChange={handleChangeInputValue}
                      />
                      Commerce
                    </label>

                    <label htmlFor="science">
                      <input
                        type="radio"
                        id="science"
                        name="group"
                        value="Science"
                        onChange={handleChangeInputValue}
                      />{" "}
                      Science
                    </label>
                  </div>

                  {/* Date of Birth select here  */}

                  <span>Select your date of birth</span>

                  <div className="threpole-width">
                    <select name="day" id="">
                      {days.map((item, index) => {
                        return (
                          <option
                            key={index}
                            value={item}
                            selected={new Date().getDate() === item}
                          >
                            {" "}
                            {item}{" "}
                          </option>
                        );
                      })}
                    </select>

                    <select
                      name="month"
                      id=""
                      value={input.month}
                      onChange={handleChangeInputValue}
                    >
                      {months.map((item, index) => {
                        return (
                          <option
                            key={index}
                            value={item}
                            selected={new Date().getMonth() === index}
                          >
                            {" "}
                            {item}{" "}
                          </option>
                        );
                      })}
                    </select>

                    <select
                      name="year"
                      id=""
                      value={input.year}
                      onChange={handleChangeInputValue}
                    >
                      {years?.map((item, index) => {
                        return (
                          <option
                            key={index}
                            value={item}
                            selected = {
                              (year == item) ? "selected": ""
                            }
                           
                            
                          >
                            
                            {" "}
                            {item}{" "}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <span>Select your date of birth</span>
                  <div className="threpole-width">
                    <select
                      name="address"
                      id=""
                      value={input.address}
                      onChange={handleChangeInputValue}
                    >
                      <option disabled selected>
                        {" "}
                        Select your address{" "}
                      </option>
                      {districs?.map((item, index) => {
                        return (
                          <option
                            key={index}
                            value={item}
                            selected={item === "Sunamganj"}
                          >
                            {" "}
                            {item}{" "}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <span>Students Photo link</span>

                  <div className="submitButton_PhotoLink">
                    <input
                      type="text"
                      placeholder="Students Photo link"
                      value={input.photo}
                      name="photo"
                      onChange={handleChangeInputValue}
                    />
                    <button type="submit" className="bg-info">
                      {" "}
                      Submit{" "}
                    </button>
                  </div>
                </form>
              </Modal.Body>
            </Modal>

            <button
              className="btn btn-sm btn-success my-2"
              onClick={handleShowModal}
            >
              {" "}
              Create Student{" "}
            </button>

            <Card>
              <Card.Body>
                <Table bordered hover>
                  <thead>
                    <tr className="text-center align-middle table-dark">
                      <th>#</th>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th> DOB </th>
                      <th> Gender </th>
                      <th>Group</th>
                      <th> Address </th>
                      <th> Action </th>
                    </tr>
                  </thead>

                  <tbody>
                    {students.map((item, index) => {
                      return (
                        <tr key={index} className="text-center align-middle">
                          <td>1</td>
                          <td>
                            <img
                              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                              alt=""
                              style={{
                                height: "45px",
                                width: "45px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </td>
                          <td>Bishsajit Baishnab</td>
                          <td>bishsajitbaishnab527@gmail.com</td>
                          <td>01754792527</td>
                          <td> 19/09/200 </td>
                          <td> Male </td>
                          <td> Science </td>
                          <td> Sunamgong </td>
                          <td>
                            <button className="btn btn-sm btn-primary">
                              {" "}
                              <IoEye />{" "}
                            </button>
                            <button className="btn btn-sm btn-warning mx-2">
                              {" "}
                              <FaUserEdit />{" "}
                            </button>
                            <button className="btn btn-sm btn-danger">
                              {" "}
                              <MdDeleteForever />{" "}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// export default Home;
export default Home;
