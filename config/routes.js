/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  'GET /post': {
    controller: 'PostController',
    action: 'getPost'
  },

  'GET /post/:id': {
    controller: 'PostController',
    action: 'getOnePost'
  },

  'POST /post/create': {
    controller: 'PostController',
    action: 'createPost',
  },

  'PUT /post/:id': {
    controller: 'PostController',
    action: 'modifyPost'
  },

  'DELETE /post/:id': {
    controller: 'PostController',
    action: 'deletePost'
  },

  'GET /comment': {
    controller: 'CommentaryController',
    action: 'getComment'
  },

  'POST /comment/create': {
    controller: 'CommentaryController',
    action: 'createComment',
  },

  'PUT /comment/:id': {
    controller: 'CommentaryController',
    action: 'modifyComment'
  },

  'DELETE /comment/:id': {
    controller: 'CommentaryController',
    action: 'deleteComment'
  },


  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/


};
