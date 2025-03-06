import {
    mutation,
    query
} from "./_generated/server";
import {
    v
} from "convex/values";

export const CreateWorkspace = mutation({
    args: {
        messages: v.any(),
        user: v.id('users')
    },
    handler: async (ctx, args) => {
        const WorkSpaceId = await ctx.db.insert('workspace', {
            messages: args.messages,
            user: args.user
        });
        return WorkSpaceId;
    }

})

// Function to get workspace data including messages
export const GetWorkspace = query({
    args: {
        WorkSpaceId: v.id("workspace"),
    },
    handler: async (ctx, args) => {
        // Fetch the workspace data based on the provided ID
        const workspace = await ctx.db
            .query("workspaces")
        const result = await ctx.db.get(args.WorkSpaceId);
        return result;
    }
})