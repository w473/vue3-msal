export const mixin = {
    data: function() {
        return {
            // @ts-ignore
            msal: (this.$msal) ? this.$msal.data : {}
        }
    },
    created: function() {
        // @ts-ignore
        this.$watch('$msal.data', (value) => { this.msal = value; }, { deep: true });
    }
};
