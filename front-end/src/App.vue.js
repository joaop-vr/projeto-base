import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'App',
    setup() {
        const message = ref(false);
        const showMessage = () => {
            message.value = !message.value;
        };
        return { message, showMessage };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-2xl font-bold mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-lg text-gray-300 mb-6 text-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.showMessage) },
        ...{ class: ("bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none") },
    });
    if (__VLS_ctx.message) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("mt-4 text-green-400") },
        });
    }
    ['bg-gray-900', 'text-white', 'min-h-screen', 'flex', 'flex-col', 'items-center', 'justify-center', 'p-6', 'text-2xl', 'font-bold', 'mb-4', 'text-lg', 'text-gray-300', 'mb-6', 'text-center', 'bg-blue-800', 'text-white', 'px-6', 'py-2', 'rounded-lg', 'hover:bg-blue-700', 'focus:ring-2', 'focus:ring-blue-500', 'focus:outline-none', 'mt-4', 'text-green-400',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
