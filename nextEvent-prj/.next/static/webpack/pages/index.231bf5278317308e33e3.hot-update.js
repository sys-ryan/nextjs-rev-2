webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/event-item.module.css":
/*!*************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/events/event-item.module.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".event-item_item__X0A3e {\\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\\n  border-radius: 8px;\\n  overflow: hidden;\\n  background-color: white;\\n  margin: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  grid-gap: 1rem;\\n  gap: 1rem;\\n}\\n\\n.event-item_item__X0A3e img {\\n  width: 100%;\\n  object-fit: cover;\\n  height: 10rem;\\n}\\n\\n.event-item_content__KE26S {\\n  width: 100%;\\n  padding: 0 1rem;\\n  text-align: center;\\n}\\n\\n.event-item_content__KE26S h2 {\\n  margin: 0.5rem 0;\\n}\\n\\n.event-item_date__2TizX,\\n.event-item_address__15BXz {\\n  display: flex;\\n  grid-gap: 0.5rem;\\n  gap: 0.5rem;\\n  align-items: center;\\n}\\n\\n.event-item_date__2TizX svg,\\n.event-item_address__15BXz svg {\\n  width: 1.25rem;\\n  height: 1.25rem;\\n  color: #666666;\\n}\\n\\n.event-item_content__KE26S time {\\n  color: #666666;\\n  font-weight: bold;\\n}\\n\\n.event-item_content__KE26S address {\\n  margin: 0.5rem 0;\\n  color: #666666;\\n  white-space: pre;\\n}\\n\\n.event-item_actions__1tukJ {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 1rem;\\n}\\n\\n.event-item_actions__1tukJ a {\\n  display: block;\\n}\\n\\n.event-item_actions__1tukJ a span {\\n  vertical-align: middle;\\n}\\n\\n.event-item_icon__3Vrm8 {\\n  /* margin-left: 0.5rem; */\\n}\\n\\n.event-item_icon__3Vrm8 svg {\\n  /* */\\n}\\n\\n@media (min-width: 768px) {\\n  .event-item_item__X0A3e {\\n    flex-direction: row;\\n  }\\n\\n  .event-item_item__X0A3e img {\\n    width: 40%;\\n    height: 14rem;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://components/events/event-item.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,wCAAwC;EACxC,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,cAAS;EAAT,SAAS;AACX;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,gBAAW;EAAX,WAAW;EACX,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;EACd,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,IAAI;AACN;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,UAAU;IACV,aAAa;EACf;AACF\",\"sourcesContent\":[\".item {\\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\\n  border-radius: 8px;\\n  overflow: hidden;\\n  background-color: white;\\n  margin: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n\\n.item img {\\n  width: 100%;\\n  object-fit: cover;\\n  height: 10rem;\\n}\\n\\n.content {\\n  width: 100%;\\n  padding: 0 1rem;\\n  text-align: center;\\n}\\n\\n.content h2 {\\n  margin: 0.5rem 0;\\n}\\n\\n.date,\\n.address {\\n  display: flex;\\n  gap: 0.5rem;\\n  align-items: center;\\n}\\n\\n.date svg,\\n.address svg {\\n  width: 1.25rem;\\n  height: 1.25rem;\\n  color: #666666;\\n}\\n\\n.content time {\\n  color: #666666;\\n  font-weight: bold;\\n}\\n\\n.content address {\\n  margin: 0.5rem 0;\\n  color: #666666;\\n  white-space: pre;\\n}\\n\\n.actions {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 1rem;\\n}\\n\\n.actions a {\\n  display: block;\\n}\\n\\n.actions a span {\\n  vertical-align: middle;\\n}\\n\\n.icon {\\n  /* margin-left: 0.5rem; */\\n}\\n\\n.icon svg {\\n  /* */\\n}\\n\\n@media (min-width: 768px) {\\n  .item {\\n    flex-direction: row;\\n  }\\n\\n  .item img {\\n    width: 40%;\\n    height: 14rem;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"item\": \"event-item_item__X0A3e\",\n\t\"content\": \"event-item_content__KE26S\",\n\t\"date\": \"event-item_date__2TizX\",\n\t\"address\": \"event-item_address__15BXz\",\n\t\"actions\": \"event-item_actions__1tukJ\",\n\t\"icon\": \"event-item_icon__3Vrm8\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS5tb2R1bGUuY3NzPzQ0NmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDRCQUE0Qiw2Q0FBNkMsdUJBQXVCLHFCQUFxQiw0QkFBNEIsaUJBQWlCLGtCQUFrQiwyQkFBMkIsbUJBQW1CLGNBQWMsR0FBRyxpQ0FBaUMsZ0JBQWdCLHNCQUFzQixrQkFBa0IsR0FBRyxnQ0FBZ0MsZ0JBQWdCLG9CQUFvQix1QkFBdUIsR0FBRyxtQ0FBbUMscUJBQXFCLEdBQUcsMERBQTBELGtCQUFrQixxQkFBcUIsZ0JBQWdCLHdCQUF3QixHQUFHLGtFQUFrRSxtQkFBbUIsb0JBQW9CLG1CQUFtQixHQUFHLHFDQUFxQyxtQkFBbUIsc0JBQXNCLEdBQUcsd0NBQXdDLHFCQUFxQixtQkFBbUIscUJBQXFCLEdBQUcsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsa0JBQWtCLEdBQUcsa0NBQWtDLG1CQUFtQixHQUFHLHVDQUF1QywyQkFBMkIsR0FBRyw2QkFBNkIsMkJBQTJCLE1BQU0saUNBQWlDLFlBQVksK0JBQStCLDZCQUE2QiwwQkFBMEIsS0FBSyxtQ0FBbUMsaUJBQWlCLG9CQUFvQixLQUFLLEdBQUcsU0FBUyx3R0FBd0csWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLGdDQUFnQyw2Q0FBNkMsdUJBQXVCLHFCQUFxQiw0QkFBNEIsaUJBQWlCLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLGVBQWUsZ0JBQWdCLHNCQUFzQixrQkFBa0IsR0FBRyxjQUFjLGdCQUFnQixvQkFBb0IsdUJBQXVCLEdBQUcsaUJBQWlCLHFCQUFxQixHQUFHLHNCQUFzQixrQkFBa0IsZ0JBQWdCLHdCQUF3QixHQUFHLDhCQUE4QixtQkFBbUIsb0JBQW9CLG1CQUFtQixHQUFHLG1CQUFtQixtQkFBbUIsc0JBQXNCLEdBQUcsc0JBQXNCLHFCQUFxQixtQkFBbUIscUJBQXFCLEdBQUcsY0FBYyxrQkFBa0IsMkJBQTJCLGtCQUFrQixHQUFHLGdCQUFnQixtQkFBbUIsR0FBRyxxQkFBcUIsMkJBQTJCLEdBQUcsV0FBVywyQkFBMkIsTUFBTSxlQUFlLFlBQVksK0JBQStCLFdBQVcsMEJBQTBCLEtBQUssaUJBQWlCLGlCQUFpQixvQkFBb0IsS0FBSyxHQUFHLHFCQUFxQjtBQUNod0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWl0ZW0ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ldmVudC1pdGVtX2l0ZW1fX1gwQTNlIHtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZXZlbnQtaXRlbV9pdGVtX19YMEEzZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGhlaWdodDogMTByZW07XFxufVxcblxcbi5ldmVudC1pdGVtX2NvbnRlbnRfX0tFMjZTIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZXZlbnQtaXRlbV9jb250ZW50X19LRTI2UyBoMiB7XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG5cXG4uZXZlbnQtaXRlbV9kYXRlX18yVGl6WCxcXG4uZXZlbnQtaXRlbV9hZGRyZXNzX18xNUJYeiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1nYXA6IDAuNXJlbTtcXG4gIGdhcDogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmV2ZW50LWl0ZW1fZGF0ZV9fMlRpelggc3ZnLFxcbi5ldmVudC1pdGVtX2FkZHJlc3NfXzE1Qlh6IHN2ZyB7XFxuICB3aWR0aDogMS4yNXJlbTtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG4gIGNvbG9yOiAjNjY2NjY2O1xcbn1cXG5cXG4uZXZlbnQtaXRlbV9jb250ZW50X19LRTI2UyB0aW1lIHtcXG4gIGNvbG9yOiAjNjY2NjY2O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ldmVudC1pdGVtX2NvbnRlbnRfX0tFMjZTIGFkZHJlc3Mge1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gIGNvbG9yOiAjNjY2NjY2O1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG59XFxuXFxuLmV2ZW50LWl0ZW1fYWN0aW9uc19fMXR1a0oge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZXZlbnQtaXRlbV9hY3Rpb25zX18xdHVrSiBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZXZlbnQtaXRlbV9hY3Rpb25zX18xdHVrSiBhIHNwYW4ge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmV2ZW50LWl0ZW1faWNvbl9fM1ZybTgge1xcbiAgLyogbWFyZ2luLWxlZnQ6IDAuNXJlbTsgKi9cXG59XFxuXFxuLmV2ZW50LWl0ZW1faWNvbl9fM1ZybTggc3ZnIHtcXG4gIC8qICovXFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmV2ZW50LWl0ZW1faXRlbV9fWDBBM2Uge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLmV2ZW50LWl0ZW1faXRlbV9fWDBBM2UgaW1nIHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiAxNHJlbTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWl0ZW0ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFTO0VBQVQsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZ0JBQVc7RUFBWCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLElBQUk7QUFDTjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pdGVtIHtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLml0ZW0gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgaDIge1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuXFxuLmRhdGUsXFxuLmFkZHJlc3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhdGUgc3ZnLFxcbi5hZGRyZXNzIHN2ZyB7XFxuICB3aWR0aDogMS4yNXJlbTtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG4gIGNvbG9yOiAjNjY2NjY2O1xcbn1cXG5cXG4uY29udGVudCB0aW1lIHtcXG4gIGNvbG9yOiAjNjY2NjY2O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50IGFkZHJlc3Mge1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gIGNvbG9yOiAjNjY2NjY2O1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG59XFxuXFxuLmFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uYWN0aW9ucyBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYWN0aW9ucyBhIHNwYW4ge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmljb24ge1xcbiAgLyogbWFyZ2luLWxlZnQ6IDAuNXJlbTsgKi9cXG59XFxuXFxuLmljb24gc3ZnIHtcXG4gIC8qICovXFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLml0ZW0ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLml0ZW0gaW1nIHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiAxNHJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaXRlbVwiOiBcImV2ZW50LWl0ZW1faXRlbV9fWDBBM2VcIixcblx0XCJjb250ZW50XCI6IFwiZXZlbnQtaXRlbV9jb250ZW50X19LRTI2U1wiLFxuXHRcImRhdGVcIjogXCJldmVudC1pdGVtX2RhdGVfXzJUaXpYXCIsXG5cdFwiYWRkcmVzc1wiOiBcImV2ZW50LWl0ZW1fYWRkcmVzc19fMTVCWHpcIixcblx0XCJhY3Rpb25zXCI6IFwiZXZlbnQtaXRlbV9hY3Rpb25zX18xdHVrSlwiLFxuXHRcImljb25cIjogXCJldmVudC1pdGVtX2ljb25fXzNWcm04XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/event-item.module.css\n");

/***/ })

})