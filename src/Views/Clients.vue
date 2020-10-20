<template>
  <div class="about">
    <h1>Clients</h1>
    {{ test() }}

    
  </div>
</template>

<script>
export default {
  name: 'Clients',
  methods: {
    test: function() {
      console.log(this.$db)
    }
  }
}
</script>
