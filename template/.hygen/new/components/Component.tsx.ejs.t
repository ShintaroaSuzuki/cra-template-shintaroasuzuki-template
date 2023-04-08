---
to: <%= dir_name %>/<%= category %>/<%= component_name %>/<%= component_name %>.tsx
---

<% if (category === 'bases') { -%>
import { ComponentPropsWithoutRef, FC } from "react";
<% } else { -%>
import { FC } from "react"
import { <%= component_name %>Props } from "./<%= component_name %>.types";
<% } -%>

export const <%= component_name %>: FC<> = () => {
    return ();
};
