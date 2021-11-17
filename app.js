document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const common = {
      resetFormField(fieldElement) {
        const fieldElementInput = fieldElement.querySelector('.input');
        const fieldElementIcon = fieldElement.querySelector('.fa-check');
        const fieldElementHelp = fieldElement.querySelector('.help');
        fieldElementInput.classList.remove('is-success');
        fieldElementHelp.classList.remove('is-success');
        fieldElementInput.classList.remove('is-danger');
        fieldElementHelp.classList.remove('is-danger');
        fieldElementIcon.classList.remove('has-text-success');
        fieldElementIcon.classList.remove('has-text-danger');
        fieldElementIcon.innerHTML = '';
        fieldElementHelp.innerText = '';
      },
      all_changes(error, help, icon, checkerror, checkhelp) {
        if (checkerror) {
          // eslint-disable-next-line no-param-reassign
          help.innerText = checkerror;
          error.classList.add('is-danger');
          help.classList.add('is-danger');
          icon.classList.add('has-text-danger');
          error.classList.remove('is-success');
          help.classList.remove('is-success');
          icon.classList.remove('has-text-success');
        } else {
          help.innerText = checkhelp;
          error.classList.remove('is-danger');
          help.classList.remove('is-danger');
          icon.classList.remove('has-text-danger');
          error.classList.add('is-success');
          help.classList.add('is-success');
          icon.classList.add('has-text-success');
        }
      },
    };

    const model = {
      form:
      {
        firstname: {
          value: '',
          error: '',
          help: '',
        },
        lastname: {
          value: '',
          error: '',
          help: '',
        },
        email: {
          value: '',
          error: '',
          help: '',
        },
        phonenumber: {
          value: '',
          error: '',
          help: '',
        },
        msg: {
          value: '',
          error: '',
          help: '',
        },
        terms: {
          value: '',
          error: '',
          help: '',
        },
      },
    };
    const view = {
      form: document.querySelector('#form'),
      firstname: document.querySelector('#firstname'),
      lastname: document.querySelector('#lastname'),
      email: document.querySelector('#email'),
      phonenumber: document.querySelector('#phonenumber'),
      msg: document.querySelector('#msg'),
      terms: document.querySelector('#terms'),
      reset: document.querySelector('#reset'),
      setHandlers() {
        this.firstname.onchange = controller.handlefirstname;
        this.lastname.onchange = controller.handlelastname;
        this.email.onchange = controller.handleemail;
        this.phonenumber.onchange = controller.handlephonenumber;
        this.msg.onchange = controller.handlemsg;
        this.terms.onclick = controller.handleterm;
        this.reset.onclick = controller.handlereset;
        this.form.onsubmit = controller.handleformsubmit;
      },
      init() {
        this.setHandlers();
      },
      render: {
        firstname() {
          const error = view.firstname.querySelector('.input');
          const help = view.firstname.querySelector('.help');
          const icon = view.firstname.querySelector('.fa-check');
          const checkerror = model.form.firstname.error;
          const checkhelp = model.form.firstname.help;
          common.all_changes(error, help, icon, checkerror, checkhelp);
        },
        lastname() {
          const error = view.lastname.querySelector('.input');
          const help = view.lastname.querySelector('.help');
          const icon = view.lastname.querySelector('.fa-check');
          const checkerror = model.form.lastname.error;
          const checkhelp = model.form.lastname.help;
          common.all_changes(error, help, icon, checkerror, checkhelp);
        },
        email() {
          const error = view.email.querySelector('.input');
          const help = view.email.querySelector('.help');
          const icon = view.email.querySelector('.fa-check');
          const checkerror = model.form.email.error;
          const checkhelp = model.form.email.help;
          common.all_changes(error, help, icon, checkerror, checkhelp);
        },
        phonenumber() {
          const error = view.phonenumber.querySelector('.input');
          const help = view.phonenumber.querySelector('.help');
          const icon = view.phonenumber.querySelector('.fa-check');
          const checkerror = model.form.phonenumber.error;
          const checkhelp = model.form.phonenumber.help;
          common.all_changes(error, help, icon, checkerror, checkhelp);
        },
        msg() {
          const error = view.msg.querySelector('.input');
          const help = view.msg.querySelector('.help');
          const icon = view.msg.querySelector('.sa');
          const checkerror = model.form.msg.error;
          const checkhelp = model.form.msg.help;
          common.all_changes(error, help, icon, checkerror, checkhelp);
        },
        terms() {
          const help = view.terms.querySelector('.help');
          const checkerror = model.form.terms.error;
          const checkhelp = model.form.terms.help;
          if (checkerror) {
            help.innerText = checkerror;
          } else {
            help.innerText = checkhelp;
            help.classList.add('is-success');
          }
        },
        reset() {
          const fields = [
            view.firstname,
            view.lastname,
            view.msg,
            view.email,
            view.phonenumber,
          ];
          fields.forEach((field) => {
            common.resetFormField(field);
            document.getElementById('form').reset();
          });
        },
      },

    };

    const controller = {
      handlefirstname() {
        const firstname = view.firstname.querySelector('.input');
        model.form.firstname.value = firstname.value;
        const exp = /^[A-z ]+$/.test(model.form.firstname.value);
        if ((model.form.firstname.value).length < 3) {
          model.form.firstname.error = 'atleast 3 char dhould be there';
          // console.info(model.form.firstname.error);
        } else if (!exp) {
          model.form.firstname.error = 'not valid name';
          model.form.firstname.help = 'only letters should contain';
        //  console.info(model.form.firstname.error);
        } else {
          model.form.firstname.error = '';
          model.form.firstname.help = 'vaild';
          // console.info(model.form.firstname.help);
        }
        view.render.firstname();
      },
      handlelastname() {
        const lastname = view.lastname.querySelector('.input');
        model.form.lastname.value = lastname.value;
        const exp = /^[A-z ]+$/.test(model.form.lastname.value);
        if ((model.form.lastname.value).length < 3) {
          model.form.lastname.error = 'atleast 3 char dhould be there';
        } else if (!exp) {
          model.form.lastname.error = 'not valid name';
          model.form.lastname.help = 'only letters should contain';
          console.info(model.form.lastname.error);
        } else {
          model.form.lastname.error = '';
          model.form.lastname.help = 'vaild';
          console.info(model.form.lastname.help);
        }
        view.render.lastname();
      },
      handleemail() {
        const email = view.email.querySelector('.input');
        model.form.email.value = email.value;
        const exp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(model.form.email.value);
        if (!exp) {
          model.form.email.error = 'email is not valid';
        } else {
          model.form.email.error = '';
          model.form.email.help = 'email is valid';
        }
        view.render.email();
      },
      handlephonenumber() {
        const phonenumber = view.phonenumber.querySelector('.input');
        model.form.phonenumber.value = phonenumber.value;
        const exp = /^[1-9]{1}[0-9]{9}$/;
        if (!exp.test(model.form.phonenumber.value)) {
          model.form.phonenumber.error = 'mobile number is not valid';
        } else {
          model.form.phonenumber.error = '';
          model.form.phonenumber.help = 'mobile number is valid';
        }
        view.render.phonenumber();
      },
      handlemsg() {
        const msg = view.msg.querySelector('.input');
        model.form.msg.value = msg.value.split(' ');
        // console.info(model.form.msg.value);
        if ((model.form.msg.value).length < 4) {
          model.form.msg.error = 'enter atleast 4 letters';
        } else {
          model.form.msg.error = '';
          model.form.msg.help = 'thankyou';
        }
        view.render.msg();
      },
      handleterm() {
        const terms = view.terms.querySelector('.checkbox').checked;
        if (terms) {
          model.form.terms.error = 'not accepted';
        } else {
          model.form.terms.error = '';
          model.form.terms.help = 'accepted';
        }
        view.render.terms();
      },
      handlereset() {
        view.render.reset();
      },
      handleformsubmit(evt) {
        evt.preventDefault();
        controller.handleterm();
        controller.handlemsg();
        controller.handlephonenumber();
        controller.handleemail();
        controller.handlelastname();
        controller.handlefirstname();
        const errors = [];
        Object.keys(model.form).forEach((property) => {
          if (model.form[property].error) {
            errors.push(model.form[property].error);
          }
        });
        if (errors.length > 0) {
          evt.preventDefault();
        } else {
          view.form.submit();
        }
      },
      init() {
        view.init();
      },

    };

    controller.init();
  }
};
