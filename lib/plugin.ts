'use strict';
import { reactive } from 'vue'
import { Options, MSALBasic } from './src/types';
import { MSAL } from './src/main';
import { mixin } from "./mixin";
export const msalMixin = mixin;

export const msalPlugin = {
    install: (app: any, options: Options) => {
        
        const msal = new MSAL(options);
        if (options.framework && options.framework.globalMixin) {
            app.mixin(mixin);
        }
        const exposed: MSALBasic = reactive({
            data: msal.data,
            signIn() { msal.signIn(); },
            async signOut() { await msal.signOut(); },
            isAuthenticated() { return msal.isAuthenticated(); },
            async acquireToken(request, retries = 0) { return await msal.acquireToken(request, retries); },
            async msGraph(endpoints, batchUrl) { return await msal.msGraph(endpoints, batchUrl) },
            saveCustomData(key: string, data: any) { msal.saveCustomData(key, data); }
        })

        app.config.globalProperties.$msal = exposed

        return exposed;
    }
}
