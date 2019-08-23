<template>
  <section>
    <!-- <form @submit.prevent="accountCreate">
      <span>To create an account :</span>
      <input
        id="token-code-input"
        type="text"
        placeholder="token code"
        v-model="tokenCode"
        required
      />
      <button id="token-code-ok" type="submit">[CREATE]</button>
    </form>-->
  </section>
</template>

<script>
import api from "../api/transaction";

export default {
  data() {
    return {
      tokenCode: ""
    };
  },

  methods: {
    async accountCreate() {
      const { id } = await api.invoke(
        this.$store.getters.getUserId,
        "account",
        this.tokenCode
      );

      if (id) {
        console.log("account created.");
      }
    }
  }
};
</script>
