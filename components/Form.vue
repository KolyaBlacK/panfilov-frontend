<template>
  <ValidationObserver v-slot="{ handleSubmit }" class='form'>
    <form @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider v-slot='{ errors }' class='form-input-container' rules='required|email'>
        <input
          v-model='email'
          type='text'
          name='email'
          class='form-input'
          placeholder='Ваш E-mail'
        >
        <span class='form-input-error'>{{ errors[0] }}</span>
      </ValidationProvider>
      <ValidationProvider v-slot='{ errors }' class='form-input-container' rules='required'>
        <input
          v-model='name'
          type='text'
          name='name'
          class='form-input'
          placeholder='ФИО'
        >
        <span class='form-input-error'>{{ errors[0] }}</span>
      </ValidationProvider>
      <textarea
        v-model='message'
        name='message'
        cols='30'
        rows='5'
        class='form-textarea'
        placeholder='Оставьте ваш комментарий'
      ></textarea>
      <button
        type='submit'
        class='form-submit'
      >
        {{$t('send')}}
      </button>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationProvider, ValidationObserver, setInteractionMode } from 'vee-validate'
setInteractionMode('passive')

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      email: '',
      name: '',
      message: ''
    }
  },
  methods: {
    async onSubmit() {
      try {
        await this.$strapi.$http.$post('/form', {email: this.email, name: this.name, message: this.message});
        await this.$router.push(this.localePath('/thanks'));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~/assets/scss/variables';

.form {
  display: flex;
  flex-direction: column;
  width: 60%;
  @media #{$media-xs} {
    width: 100%;
  }
}

.form-input-container {
  display: block;
  margin-bottom: 1vw;
}

.form-input-error {
  display: block;
  color: $otherFocus;
  font-size: 0.8vw;
  @media #{$media-lg} {
    font-size: 1vw;
  }
  @media #{$media-md} {
    font-size: 1.4vw;
  }
  @media #{$media-xs} {
    font-size: 12px;
    line-height: 12px;
  }
}

.form-input {
  margin-bottom: 0.6vw;
  @media #{$media-xs} {
    margin-bottom: 8px;
  }
}

.form-input,
.form-textarea {
  background: none;
  border: none;
  color: $white;
  font-size: 1vw;
  font-family: 'Object Sans', sans-serif;
  padding: 0.5vw;
  border-bottom: 1px solid $white;
  width: 100%;
  outline: none;
  border-radius: 0;
  transition: border-bottom-color $textTimeTransition ease;
  @media #{$media-lg} {
    font-size: 1.4vw;
  }
  @media #{$media-md} {
    font-size: 1.8vw;
  }
  @media #{$media-xs} {
    font-size: 16px;
    line-height: 16px;
    padding: 14px;
  }
  &::placeholder {
    color: $darkGray;
  }
  &:focus {
    border-bottom-color: $styleRose;
  }
}

.form-textarea {
  resize: none;
}

.form-submit {
  background: $styleRose;
  text-transform: uppercase;
  font-size: 1.2vw;
  line-height: 3.5vw;
  height: 3.3vw;
  width: 40%;
  margin-top: 3em;
  color: $white;
  cursor: pointer;
  transition: all $textTimeTransition ease;
  &:hover {
    background: $white;
    color: $styleRose;
  }
  @media #{$media-md} {
    font-size: 1.6vw;
    line-height: 3.8vw;
    width: 50%;
    height: 4.5vw;
  }
  @media #{$media-xs} {
    width: 230px;
    font-size: 16px;
    line-height: 21px;
    height: 48px;
  }
}
</style>
