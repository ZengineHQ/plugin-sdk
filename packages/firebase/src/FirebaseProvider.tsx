import React, { useState, useEffect, createContext, ReactChild, ReactElement } from 'react';
import { useZengineContext } from '@zenginehq/react-sdk';
// @ts-expect-error
import Firebase from 'firebase';

export const FirebaseContext = createContext({});

interface FirebaseSnapshot {
  val: Function
}

interface FirebaseProviderProps {
  children?: ReactChild | ReactChild[]
  LoadingStateComponent: React.Component
}

interface PluginDefinition {
  firebaseUrl: string|null
  firebaseAuthToken: string|null
}

export const FirebaseProvider = (props: FirebaseProviderProps): ReactElement => {
  const [firebaseRef, setFirebaseRef] = useState(null);
  const [context, setContext] = useState(null);
  const znContext = useZengineContext();

  let plugin: PluginDefinition = { firebaseUrl: null, firebaseAuthToken: null };
  let workspaceId: number | undefined;

  if (znContext?.context !== undefined) {
    if (znContext.context.plugin !== undefined) {
      plugin = znContext.context?.plugin;
    }
    if (znContext.context.workspace !== undefined) {
      workspaceId = znContext.context.workspace.id;
    }
  }

  const { firebaseUrl, firebaseAuthToken } = plugin;

  useEffect(() => {
    if (firebaseUrl !== null && workspaceId !== undefined && firebaseAuthToken !== null) {
      const fbRef = new Firebase(`${firebaseUrl}/workspace/${workspaceId}/`);
      fbRef.authWithCustomToken(firebaseAuthToken, (error: any) => {
        if (error !== null) {
          console.log('Firebase Login Failed!', error);
        }
        setFirebaseRef(fbRef);
      });
    }
  }, [firebaseAuthToken, firebaseUrl, workspaceId]);

  useEffect(() => {
    if (firebaseRef !== null && workspaceId !== undefined) {
      // @ts-expect-error
      firebaseRef.on('value', (snap: FirebaseSnapshot) => {
        const val = snap.val();
        console.log('val', val);
        setContext(val);
      });
    }
  }, [firebaseRef, workspaceId]);

  return <FirebaseContext.Provider value={[context, firebaseRef]}>
    {context !== null ? props.children
      : props.LoadingStateComponent !== null ? props.LoadingStateComponent : (
        <h3 className='text-yellow-500 text-center'>Loading Firebase Data...</h3>)
    }
  </FirebaseContext.Provider>;
};
