<template>
  <div class="h-input flex flex-row-between flex-items-center">
    <text class="font-14">{{title}}</text>
    <input :type="type" :placeholder="placeholder" :value="value" class="flex myInput" @input="onInput">
    <image v-if="del" src="/src/assets/icons/del.png" style="width:40px;height:40px" @click="handleDel"/>
  </div>
</template>

<script>
// import HText from '@/common/text.vue'
// const modal = weex.requireModule('modal');
export default {
  // components: { HText },
  props: {
    value: String,
    title: {
      type: String,
      default: null
    },
    del: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput (e) {
      console.log(e)
      // modal.toast({'message': e.currentTarget.attr.value , duration: 3})
      this.$emit('input', e.currentTarget.attr.value)
    },
    handleDel () {
      modal.toast({message: 'del'})
      this.$emit('input', '')
    }
  }
}
</script>

<style src="../components/base.css"></style>
<style scoped>
.h-input{
  height: 80px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #373A41;
  padding: 0 30px;
  margin-bottom: 24px;
}
.myInput{
  background-color: #373A41;
  height: 80px;
}
</style>
