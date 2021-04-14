// autobind decorator
export function autobind(_0: any, _1: string, descriptor: PropertyDescriptor): PropertyDescriptor{

    // console.log({target, methodName, descriptor});
    const originalMethod = descriptor.value;

    return {
        enumerable: false,
        configurable: false,
        get(){
            return originalMethod.bind(this)
        }
    }
}