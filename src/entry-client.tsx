/// <reference types="vinxi/types/client" />
import { mount, StartClient } from "@solidjs/start/client";

export default mount(() => <StartClient />, document.getElementById("app")!);
