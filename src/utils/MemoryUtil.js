import SecureLs from 'secure-ls';

const secureLs = new SecureLs({encodingType: 'aes'});

export const setMemoryUser = (memoryUser) => {
    secureLs.set('memory-user', memoryUser);
}

export const getMemoryUser = () => {
    return secureLs.get('memory-user');
}

export const deleteMemoryUser = () => {
    secureLs.remove('memory-user');
}