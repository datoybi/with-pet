import './DiaryMain.scss';

import { DateProvider } from '../ChallengeSection/context/DateContext';

import ChallengeSection from '../ChallengeSection/ChallengeSection';
import WalkingSection from '../WalkingSection/WalkingSection';
import WeightSection from '../WeightSection/WeightSection';
import HealthSection from '../HealthSection/HealthSection';
import SpecialNoteSection from '../SpecialNoteSection/SpecialNoteSection';

function DiaryMain() {
  return (
    <DateProvider>
      <div className="diary-main-container">
        <div className="diary-main-flex-container">
          <div className="Challenge-Health-section">
            <ChallengeSection />
            <HealthSection />
          </div>
          <div className="Walking-Weight-SpecialNote">
            <WalkingSection />
            <WeightSection />
            <SpecialNoteSection />
          </div>
        </div>
      </div>
    </DateProvider>
  );
}

export default DiaryMain;
