import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './resume.css'
class Contact extends Component {
    state = {
        from: "",
        from_email: "",
        subject: "",
        message: "",
        loading: false
    }
    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.setState({ ...this.state, loading: true });
        var template_params = {
            "from": this.state.from,
            "from_email": this.state.from_email,
            "subject": this.state.subject,
            "name": this.state.from,
            "message": this.state.message
        }

        var service_id = "default_service";
        var template_id = "portfolio";
        emailjs
            .send(service_id, template_id, template_params, "user_lkMMesURFUC65Hi58FbKe")
            .then(res => {
                console.log("success", res.status, res.text); this.setState({
                    from: "",
                    from_email: "",
                    subject: "",
                    message: "",
                    loading: false
                });
            })
            .catch(err => { console.log("error", err); this.setState({ ...this.state, loading: false }) });
        console.log("i m called");
    };
    render() {
        return (
            <div>
                <div id="contact">
                    <h2
                        className="display-4 p-3 card text-dark text-center"
                        style={{
                            backgroundColor: "#F1F1F1",
                            borderBottom: "1px solid white",
                            margin: "0px"
                        }}
                    >
                        Contact Me
                    </h2>
                    {this.state.loading ? (
                        <div
                            className="card mr-auto"
                            style={{
                                width: "40%",
                                display: "inline-block",
                                marginLeft: "10%",
                                backgroundColor: "#F1F1F1",
                                borderRight: "2px solid white"
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: "#F1F1F1",
                                    margin: "3%",
                                    padding: "6%",
                                    width: "30%",
                                    marginLeft: "35%",
                                    marginBottom: "0"
                                }}
                            >
                                <Loader type="Plane" color="#1B73BA" width={100} height={90} />
                            </div>
                            <div
                                className="lead"
                                style={{
                                    backgroundColor: "#F1F1F1",
                                    padding: "5%",
                                    width: "30%",
                                    marginLeft: "35%",
                                    marginTop: "0",
                                    marginBottom: "8%",
                                    fontFamily: "comic sans ms",
                                    fontStyle: "italic",
                                    textAlign: "center"
                                }}
                            >
                                Sending...
                            </div>
                        </div>
                    ) : (
                            <div
                                className="card mr-auto"
                                style={{
                                    width: "40%",
                                    display: "inline-block",
                                    marginLeft: "10%",
                                    backgroundColor: "#F1F1F1",
                                    borderRight: "2px solid white"
                                }}
                            >
                                <form className="card-body" onSubmit={this.submitHandler}>
                                    <div className="form-row" id="test">
                                        <div className="form-group col-md-5">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Jack Sparrow"
                                                onChange={this.onChangeHandler}
                                                name="from"
                                                value={this.state.from}
                                            ></input>
                                        </div>
                                        <div className="form-group col-md-7">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">@</div>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="lucifer@microsoft.com"
                                                    onChange={this.onChangeHandler}
                                                    name="from_email"
                                                    value={this.state.from_email}
                                                ></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Subject</div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Build A WebApp"
                                                onChange={this.onChangeHandler}
                                                name="subject"
                                                value={this.state.subject}
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            rows="8"
                                            placeholder="Message"
                                            onChange={this.onChangeHandler}
                                            name="message"
                                            value={this.state.message}
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            className="btn btn-dark form-control"
                                            value="Submit"
                                        ></input>
                                    </div>
                                </form>
                            </div>
                        )}
                    <div
                        className="card p-3"
                        style={{
                            width: "40%",
                            backgroundColor: "#F1F1F1",
                            display: "inline-block",
                            verticalAlign: "top",
                            borderLeft: "1px solid white"
                        }}
                    >
                        <ul className="card-body">
                            <li className="text-dark text-center lead font-weight-bold">
                                Rishab Mangal
                            </li>
                            <li className="text-secondary font-weight-bold text-center">
                                Software Engineer
                            </li>
                            <li className="text-dark">Phone:</li>
                            <li className="text-secondary" style={{ paddingTop: "0px" }}>
                                9928799243
                            </li>
                            <li className="text-dark">Email:</li>
                            <li className="text-secondary">rishabhmangal1@gmail.com</li>
                            <li className="text-dark">Address:</li>
                            <li className="text-secondary">Mnit Japiur</li>
                            <li className="text-dark">Birthday:</li>
                            <li className="text-secondary">20th Oct 1999</li>
                        </ul>
                        <div
                            className="container-fluid text-dark"
                            style={{
                                backgroundColor: "#000000",
                                display: "inline-block",
                                paddingBottom: "1%",
                                paddingTop: "2%",
                                paddingLeft: "25%",
                                borderTop: "1px solid white",
                                borderLeft: "1px solid white"
                            }}
                        >
                            <a href="mailto:rishabhmangal1@gmail.com?subject=Awesome App">
                                <i className="fas fa-envelope px-3 mr-auto"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/rishab-m-00b60a103/">
                                <i className="fab fa-linkedin px-3 mr-auto"></i>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=9928799243&text=Hello">
                                <i className="fab fa-whatsapp px-3 mr-auto"></i>
                            </a>
                            <a href="https://www.facebook.com/rishabh.mangal.77">
                                <i className="fab fa-facebook-square px-3 mr-auto"></i>
                            </a>
                            <a href="https://www.instagram.com/rishabhmangal1/">
                                <i className="fab fa-instagram px-3 mr-auto"></i>
                            </a>
                            <a href="https://github.com/RishabMangal">
                                <i className="fab fa-github px-3 mr-auto"></i>
                            </a>
                            <a href="https://www.github.com">
                                <i className="fab fa-google-plus px-3 mr-auto"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
