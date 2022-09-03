/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {
    let output = [];
    const dfs = (node) => {
        if (!node) return 0;
        dfs(node.left);
        output.push(node.val);
        dfs(node.right);
        
    }
    
    dfs(root);
    return output;
}