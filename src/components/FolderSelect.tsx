import React, { useState } from 'react';
import {
  IonInput,
  IonIcon,
  IonButton,
  IonAlert
} from '@ionic/react';
import { folderOpen } from 'ionicons/icons';

interface FolderSelectProps {
  folderPath: string;
}

const FolderSelect: React.FunctionComponent<FolderSelectProps> = ({ folderPath }) => {
  const [showAlert1, setShowAlert1] = useState(false);

  const handleStart = async () => {
    if (!folderPath) {
      setShowAlert1(true);
    }
  };

  return <div>
          <IonInput
            value="folderPath"
            placeholder="Choose a folder to scan">
            <IonIcon
              className="folder-icon"
              slot="start"
              color="medium"
              icon={folderOpen} />
          </IonInput>
          <IonButton
            color="primary"
            onClick={handleStart}>
            Start
              </IonButton>
          <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}
            header={'Oh oh'}
            subHeader={'No folder selected'}
            message={'You must enter a folder to scan'}
            buttons={['OK']}
          />
        </div>
};

export default FolderSelect;