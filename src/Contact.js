import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
// import './resume.css'
class Contact extends Component {
  state = {
    from: '',
    from_email: '',
    subject: '',
    message: '',
    loading: false
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitHandler = e => {
    e.preventDefault()
    this.setState({ ...this.state, loading: true })
    var template_params = {
      from: this.state.from,
      from_email: this.state.from_email,
      subject: this.state.subject,
      name: this.state.from,
      message: this.state.message
    }

    var service_id = 'default_service'
    var template_id = 'portfolio'
    emailjs
      .send(
        service_id,
        template_id,
        template_params,
        'user_lkMMesURFUC65Hi58FbKe'
      )
      .then(res => {
        console.log('success', res.status, res.text)
        this.setState({
          from: '',
          from_email: '',
          subject: '',
          message: '',
          loading: false
        })
      })
      .catch(err => {
        console.log('error', err)
        this.setState({ ...this.state, loading: false })
      })
    console.log('i m called')
  }
  render () {
    return (
      <div style={{backgroundColor:"black"}}>
        <div id='contact'>
          <h2
            className='display-4 p-3 text-light text-center'
            style={{
              borderBottom: '1px dotted gray',
              marginTop: '1%',
              marginBottom: '2%',
            }}
          >
            Contact Me
          </h2>
        </div>
        <div className="row align-items-start">
          {this.state.loading ? (
            <div
                className='card mr-auto col-sm-5 offset-sm-1 p-1 contact-form'
            >
              <div
                style={{
                  backgroundColor: '#F1F1F150',
                  margin: '3%',
                  padding: '6%',
                  width: '30%',
                  marginLeft: '35%',
                  marginBottom: '0'
                }}
              >
                <Loader type='Plane' color='#1B73BA' width={100} height={90} />
              </div>
              <div
                className='lead'
                style={{
                  backgroundColor: '#F1F1F150',
                  padding: '5%',
                  width: '30%',
                  marginLeft: '35%',
                  marginTop: '0',
                  marginBottom: '8%',
                  fontFamily: 'comic sans ms',
                  fontStyle: 'italic',
                  textAlign: 'center'
                }}
              >
                Sending...
              </div>
            </div>
          ) : (
            <div
            className='mr-auto col-sm-4 p-1 contact-form'
            >
              <form className='contact-form-body' onSubmit={this.submitHandler}>
                <div className='form-row' id='test'>
                  <div className='form-group col-sm-6'>
                    <div className='input-group-prepend'>
                      <div className='input-group-text'><i className="fas fa-user-ninja text-primary fa-1x" style={{animation:"none"}}></i></div>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Jack Sparrow'
                          onChange={this.onChangeHandler}
                          name='from'
                          value={this.state.from}
                        ></input>
                      </div>
                  </div>
                  <div className='form-group col-sm-6'>
                    <div className='input-group-prepend'>
                      <div className='input-group-text text-primary'>@</div>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='lucifer@microsoft.com'
                        onChange={this.onChangeHandler}
                        name='from_email'
                        value={this.state.from_email}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='input-group-prepend'>
                    <div className='input-group-text text-primary'>Subject</div>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Build A WebApp'
                      onChange={this.onChangeHandler}
                      name='subject'
                      value={this.state.subject}
                    ></input>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control'
                    rows='8'
                    placeholder='Message'
                    onChange={this.onChangeHandler}
                    name='message'
                    value={this.state.message}
                  ></textarea>
                </div>
                <div className='form-group'>
                  <input
                    type='submit'
                    className='btn btn-dark form-control'
                    value='Send'
                  ></input>
                </div>
              </form>
            </div>
          )}
          <div
            className='p-3 col-sm-5 p-1 contact-card'
          >
            <ul className='card-body'>
              <li className='text-center lead font-weight-bold'>
                Rishab Mangal
              </li>
              <li className='font-weight-bold lead text-center'>
                Software Engineer
              </li>
              <li>Phone:</li>
              <li className='text-secondary' style={{ paddingTop: '0px' }}>
                9928799243
              </li>
              <li>Email:</li>
              <li className='text-secondary'>rishabhmangal1@gmail.com</li>
              <li >Address:</li>
              <li className='text-secondary'>Ganga Hostel | MNIT Japiur | Rajasthan | India</li>
            <li>
            <div
              className='social'
            >
              <a href='mailto:rishabhmangal1@gmail.com?subject=Awesome App'>
                <i className='fas fa-envelope px-3 mr-auto '></i>
              </a>
              <a href='https://www.linkedin.com/in/rishab-m-00b60a103/'>
                <i className='fab fa-linkedin px-3 mr-auto'></i>
              </a>
              <a href='https://api.whatsapp.com/send?phone=9928799243&text=Hello'>
                <i className='fab fa-whatsapp px-3 mr-auto'></i>
              </a>
              <a href='https://www.facebook.com/rishabh.mangal.77'>
                <i className='fab fa-facebook-square px-3 mr-auto'></i>
              </a>
              <a href='https://www.instagram.com/rishabhmangal1/'>
                <i className='fab fa-instagram px-3 mr-auto'></i>
              </a>
              <a href='https://github.com/RishabMangal'>
                <i className='fab fa-github px-3 mr-auto'></i>
              </a>
              <a href='https://www.github.com'>
                <i className='fab fa-google-plus px-3 mr-auto'></i>
              </a>
                </div>
                </li>
              </ul>
        </div>  
        </div>
      </div>
    )
  }
}

export default Contact
