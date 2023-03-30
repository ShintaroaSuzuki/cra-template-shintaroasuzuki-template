---
to: src/features/<%= feature %>/pages/<%= page_name %>/<%= page_name %>.tsx
---

import { FC } from 'react';

export const <%= page_name %>: FC = () => {
    return (
        <div>
            <p><%= page_name %></p>
        </div>
    );
};
