
            import { Ghost } from "./../../../../../../stories/button.stories.tsx";

            const TempoComponent = () => {
              return Ghost.render(Ghost.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;