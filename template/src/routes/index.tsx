import { Routes, Route } from "react-router-dom";

import { lazyImport } from "@/utils/lazyImport";

const { App } = lazyImport(async () => await import("@/App"), "App");

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    );
};
