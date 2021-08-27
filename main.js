const styles = `body{margin:0;font-family:'Ubuntu Mono',sans-serif;background:#fff;display:flex}aside{width:237px;left:-2px;top:-5px;background:#fafbfd;text-align:center;margin-right:20px}#app{padding:50px;top:0;display:flex;flex-direction:column;flex-wrap:nowrap;box-sizing:content-box;width:75%}aside h1{left:50%;position:relative;font-size:2.5rem;width:1px;word-wrap:break-word;color:#090f31;font-family:'Noto Sans JP';font-style:normal;font-weight:700}.items{display:flex;flex-direction:column;margin:20px 0;width:fit-content}.items .nameofcomponent{font-style:normal;font-weight:400;font-size:1rem;line-height:12px;color:#333;margin-bottom:12px}.items label{margin-bottom:4px;font-family:'Noto Sans JP';font-style:normal;font-weight:400;font-size:12px;line-height:17px;color:#333}.items .input{width:200px;height:56px;border:1px solid #828282;box-sizing:border-box;border-radius:8px;color:#333;font-family:'Noto Sans JP';font-style:normal;font-weight:500;font-size:14px;line-height:20px;padding-left:12px}.items .helpertext{font-family:'Noto Sans JP';font-style:normal;font-weight:400;font-size:10px;line-height:14px;color:#828282;margin-top:4px}.erroritem .error{border:1px solid #d32f2f}.erroritem .helpertext,.erroritem label{color:#d32f2f!important}.items .disabled{background:#f2f2f2;border:1px solid #e0e0e0;cursor:not-allowed}.items .disabled:focus,.items .disabled:hover{border:1px solid #e0e0e0!important}.items .sm{height:40px!important}.items .md{height:56px!important}.fullwidthitem,.items .fullwidth{width:100%!important}.items .multiline{border:1px solid #828282;box-sizing:border-box;border-radius:8px;width:200px}.items .material-icons{color:#828282;pointer-events:none}.items .start{position:relative;top:40px;left:12px;width:auto;text-align:left}.items .starticon{padding-left:45px}.items .end{position:relative;bottom:40px;right:10px;width:auto;text-align:right}.items .input:hover{border:1px solid #333}:focus{outline:0}.items .input:focus{border:1px solid #2962ff}.erroritem .error:focus{border:1px solid #d32f2f}`
const style = document.createElement('style')
style.innerHTML = styles
document.getElementsByTagName("head")[0].appendChild(style)

const app = Vue.createApp({})

app.component('inputcpt', {
    data() {
        return {
            inputTextClasses: ['input', this.size, { fullwidth: this.fullwidth }, { error: this.error }, { disabled: this.disabled }, { starticon: this.starticon }, { endicon: this.endicon }],
            textareaClasses: ['multiline', { error: this.error }, { disabled: this.disabled }]
        }
    },
    props: {
        value: String,
        size: String,
        row: String,
        starticon: String,
        endicon: String,
        helpertext: String,
        fullwidth: Boolean,
        multiline: Boolean,
        error: Boolean,
        disabled: Boolean
    },
    computed: {
        inputSpan() {
            const props = this.$props
            const array = []
            for (const [key, value] of Object.entries(props)) {
                if (value != undefined && value != false)
                    if (value == true) {
                        array.push(key)
                    }
                    else {
                        array.push(`${key}="${value}"`)
                    }
            }
            return `<Input ${array.join(' ')} />`
        }
    },
    template: `
            <span class="nameofcomponent">{{this.inputSpan}}</span>
            <div :class="['items', {erroritem: error}, {fullwidthitem: fullwidth}]">
                <label>Label</label>
                <span v-if="starticon != undefined && !multiline" class="material-icons start">{{starticon}}</span>
                <textarea v-if="multiline" :class="textareaClasses" :rows="row" :value="value"></textarea>
                <input v-else type="text" :class="inputTextClasses" placeholder="Placeholder" :value="value" :disabled="disabled">
                <span v-if="endicon != undefined && !multiline" class="material-icons end">{{endicon}}</span>
                <span v-if="helpertext != undefined" class="helpertext" v-text="helpertext"></span>
            </div>
            `
})

app.mount('#app')