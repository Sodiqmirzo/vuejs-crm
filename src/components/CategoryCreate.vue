<template>
  <div>
    <div class="col s12 m6">
      <div>
        <div class="page-subtitle">
          <h4>Создать</h4>
        </div>

        <form @submit.prevent="submitHandler">
          <div class="input-field">
            <input
              id="name"
              type="text"
              v-model="title"
              :class="{ invalid: $v.title.$dirty && !$v.title.required }"
            />
            <label for="name">Название</label>
            <span
              class="helper-text invalid"
              v-if="$v.title.$dirty && !$v.title.required"
              >Введите название категория</span
            >
          </div>

          <div class="input-field">
            <input
              id="limit"
              type="number"
              v-model="limit"
              :class="{ invalid: $v.title.$dirty && !$v.title.minValue }"
            />
            <label for="limit">Лимит</label>
            <span
              class="helper-text invalid"
              v-if="$v.title.$dirty && !$v.title.minValue"
              >Минимальная величина</span
            >
          </div>

          <button class="btn waves-effect waves-light" type="submit">
            Создать
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minValue } from "vuelidate/lib/validators";
export default {
  data: () => ({
    title: '',
    limit: 1
  }),
  validators: {
    title: { required },
    limit: { minValue: minValue(1) }
  },

  mounted() {
    M.updateTextFields();
  },

  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
    }
  }
};
</script>
