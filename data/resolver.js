import { reject } from 'lodash';
import { widgets } from './dbConnectors';

const resolvers = {

    getProduct: async ({id}) => {

        try {
            const widget = await widgets.findById(id).exec();
            return widget;
        } catch (error) {
            throw new Error(error);
        }
    },

    getAllProducts:async () => {
        try {
            const allWidgets = await widgets.find({}).exec();
            return allWidgets;
        } catch (error) {
            throw new Error(error);
        }
    },

    createProduct: async ({input}) => { 
       const newWidget = new widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            inventory: input.inventory,
            stores: input.stores

       });

       newWidget.id = newWidget._id;

        try {
            newWidget.save();
            return newWidget;
        } catch (error) {
            throw new Error(error);
        }
    },

    updateProduct: async ({ input }) => {
        try {
          const widget = await widgets.findOneAndUpdate(
            { _id: input.id },
            input,
            { new: true }
          ).exec();
      
          return widget;
        } catch (error) {
          throw new Error(error);
        }
    },

    deleteProductById: async ({id}) => {
        try {
            const widget = await widgets.findByIdAndDelete({ _id:id }).exec();
            return "Deleted Successfully!";
          } catch (error) {
            throw new Error(error);
          }
    }
      
}

export default resolvers;