
            import { Secondary } from "./../../../../../../stories/button.stories.tsx";

            const TempoComponent = () => {
              return Secondary.render(Secondary.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;