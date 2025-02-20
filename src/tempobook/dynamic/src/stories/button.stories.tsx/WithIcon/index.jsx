
            import { WithIcon } from "./../../../../../../stories/button.stories.tsx";

            const TempoComponent = () => {
              return WithIcon.render(WithIcon.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;