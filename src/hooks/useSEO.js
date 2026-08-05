import { useEffect } from 'react';

export const useSEO = (seoData, defaultTitle = "MyCredAxis - Loading...") => {
    useEffect(() => {
        document.title = seoData?.metaTitle ? seoData.metaTitle : defaultTitle;

        if (seoData?.metaDescription) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement("meta");
                metaDesc.name = "description";
                document.head.appendChild(metaDesc);
            }
            metaDesc.setAttribute("content", seoData.metaDescription);
        }

    }, [seoData, defaultTitle]);
};































