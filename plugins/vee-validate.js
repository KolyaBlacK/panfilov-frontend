import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Обязательно для заполнения'
})

extend('email', {
  ...email,
  message: 'Не валидный e-mail'
})
