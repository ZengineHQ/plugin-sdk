import { convertUndefinedPropsToNull } from './undefinedToNull';

interface FBHelper {
  update: Function
  remove: Function
  at: Function
}

export const fb = (fbRef: any): FBHelper => ({
  update: async (value: any, segments = []) => {
    let ref = fbRef;

    for (const segment of segments) {
      ref = ref.child(segment);
    }

    return await new Promise((resolve, reject) => {
      ref.update(
        convertUndefinedPropsToNull(value), (err: any) => err !== null ? reject(err) : resolve()
      );
    });
  },
  remove: async (segments = []) => {
    let ref = fbRef;

    for (const segment of segments) {
      ref = ref.child(segment);
    }

    return await new Promise((resolve, reject) => {
      ref.remove((err: any) => err !== null ? reject(err) : resolve());
    });
  },
  at: (segments = []) => {
    let ref = fbRef;

    for (const segment of segments) {
      ref = ref.child(segment);
    }

    return ref;
  }
});
