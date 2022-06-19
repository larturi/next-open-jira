import mongoose from 'mongoose';

/** 
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
**/
const mongoConnection = {
    isConnected: 0
}

export const connect = async () => {
    if(mongoConnection.isConnected) {
        console.log('MongoDB esta conectado');
        return;
    }

    if(mongoose.connections.length > 0) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;

        if(mongoConnection.isConnected === 1) {
            console.log('Usando conexion existente');
            return;
        }

        await mongoose.disconnect();
    }
    
    await mongoose.connect(process.env.MONGO_URL || '', {});
    mongoConnection.isConnected = 1;
    console.log('MongoDB connected ' + process.env.MONGO_URL);
}

export const disconnect = async () => {
    // No funciona en PROD
    // if(process.env.NODE_ENV === 'development') return;
    // if(mongoConnection.isConnected === 0) return;
    // await mongoose.disconnect();
    // console.log('MongoDB disconnected');
}