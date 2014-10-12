var MarkdownEditor=function(e){e=e||{},MarkdownEditor.superclass.constructor.call(this,e)};Ext.override(MODx.panel.Resource,{}),Ext.extend(MarkdownEditor,Ext.Component,{initComponent:function(){MarkdownEditor.superclass.initComponent.call(this),Ext.onReady(this.render,this)},buildUI:function(){this.textarea.setDisplayed("none"),this.textarea.setWidth(0),this.textarea.setHeight(0);var e=Ext.DomHelper.insertBefore(this.textarea,{tag:"div","class":"markdown-container"});Ext.DomHelper.append(e,{tag:"div",id:"content-md","class":this.textarea.dom.className}),Ext.DomHelper.append(e,{tag:"div",id:"preview-md","class":"markdown-body"}),Ext.DomHelper.append(e,{tag:"div",id:"toolbox",cn:[{tag:"span",id:"preview-button",html:'<i class="icon icon-toggle-off"></i> Preview'},{tag:"span",id:"fullscreen-button",html:'<i class="icon icon-expand"></i>'}]}),Ext.DomHelper.append(e,{tag:"span",style:"clear: both"})},registerAce:function(){this.editor=ace.edit(Ext.DomQuery.selectNode("div#content-md")),this.editor.setOptions({maxLines:1/0,minLines:25,showPrintMargin:!1}),this.editor.renderer.setShowGutter(!1),this.editor.getSession().setValue(this.textarea.getValue()),this.editor.getSession().setMode("ace/mode/markdown"),this.editor.setTheme("ace/theme/monokai")},languageOverrides:{js:"javascript",html:"xml"},registerMarked:function(){var e=this,t=new marked.Renderer;t.code=function(e,t,i){if(this.options.highlight){var s=this.options.highlight(e,t);null!=s&&s!==e&&(i=!0,e=s)}return t?'<pre><code class="hljs '+this.options.langPrefix+escape(t,!0)+'">'+(i?e:escape(e,!0))+"\n</code></pre>\n":"<pre><code>"+(i?e:escape(e,!0))+"\n</code></pre>"},marked.setOptions({highlight:function(t,i){return e.languageOverrides[i]&&(i=e.languageOverrides[i]),-1!=hljs.listLanguages().indexOf(i)?hljs.highlight(i,t).value:t},renderer:t})},render:function(){var e=this;this.textarea=Ext.get("ta"),this.buildUI(),this.registerAce(),this.registerMarked();var t=Ext.get("preview-button"),i=Ext.get("fullscreen-button"),s=Ext.get("preview-md"),n=Ext.get("content-md"),o=MODx.load({xtype:"modx-treedrop",target:n,targetEl:n,onInsert:function(e){return this.insert(e),this.focus(),!0}.bind(this.editor),iframe:!0});this.textarea.on("destroy",function(){o.destroy()}),t.addListener("click",function(){s.isVisible()?(s.setDisplayed("none"),n.setDisplayed("block"),t.child("i").removeClass("icon-toggle-on"),t.child("i").addClass("icon-toggle-off")):(s.setDisplayed("block"),n.setDisplayed("none"),t.child("i").removeClass("icon-toggle-off"),t.child("i").addClass("icon-toggle-on"))}),i.addListener("click",function(){i.child("i").hasClass("icon-expand")?(i.child("i").removeClass("icon-expand"),i.child("i").addClass("icon-compress")):(i.child("i").addClass("icon-expand"),i.child("i").removeClass("icon-compress"))}),s.update(marked(this.editor.getValue())),this.editor.getSession().on("change",function(){s.update(marked(e.editor.getValue()))})}}),MarkdownEditor=new MarkdownEditor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFBLGdCQUFBLFNBQUEsR0FDQSxFQUFBLE1BQ0EsZUFBQSxXQUFBLFlBQUEsS0FBQSxLQUFBLEdBRUEsS0FBQSxTQUFBLEtBQUEsTUFBQSxhQUVBLElBQUEsT0FBQSxlQUFBLElBQUEsV0FDQSxjQUFBLFdBQ0EsZUFBQSxXQUFBLGNBQUEsS0FBQSxNQUVBLElBQUEsUUFBQSxLQUFBLE9BQUEsT0FHQSxRQUFBLFdBQ0EsS0FBQSxTQUFBLGFBQUEsUUFDQSxLQUFBLFNBQUEsU0FBQSxHQUNBLEtBQUEsU0FBQSxVQUFBLEVBRUEsSUFBQSxHQUFBLElBQUEsVUFBQSxhQUFBLEtBQUEsVUFDQSxJQUFBLE1BQ0EsUUFBQSxzQkFHQSxLQUFBLFVBQUEsT0FBQSxHQUNBLElBQUEsTUFDQSxHQUFBLGFBQ0EsUUFBQSxLQUFBLFNBQUEsSUFBQSxZQUdBLElBQUEsVUFBQSxPQUFBLEdBQ0EsSUFBQSxNQUNBLEdBQUEsYUFDQSxRQUFBLGtCQUdBLElBQUEsVUFBQSxPQUFBLEdBQ0EsSUFBQSxNQUNBLEdBQUEsVUFDQSxLQUNBLElBQUEsT0FDQSxHQUFBLGlCQUNBLEtBQUEsaURBRUEsSUFBQSxPQUNBLEdBQUEsb0JBQ0EsS0FBQSx1Q0FJQSxJQUFBLFVBQUEsT0FBQSxHQUNBLElBQUEsT0FDQSxNQUFBLGlCQUlBLFlBQUEsV0FDQSxLQUFBLE9BQUEsSUFBQSxLQUFBLElBQUEsU0FBQSxXQUFBLG1CQUNBLEtBQUEsT0FBQSxZQUNBLFNBQUEsSUFDQSxTQUFBLEdBQ0EsaUJBQUEsSUFFQSxLQUFBLE9BQUEsU0FBQSxlQUFBLEdBQ0EsS0FBQSxPQUFBLGFBQUEsU0FBQSxLQUFBLFNBQUEsWUFDQSxLQUFBLE9BQUEsYUFBQSxRQUFBLHFCQUNBLEtBQUEsT0FBQSxTQUFBLHNCQUdBLG1CQUNBLEdBQUEsYUFDQSxLQUFBLE9BR0EsZUFBQSxXQUNBLEdBQUEsR0FBQSxLQUNBLEVBQUEsR0FBQSxRQUFBLFFBRUEsR0FBQSxLQUFBLFNBQUEsRUFBQSxFQUFBLEdBQ0EsR0FBQSxLQUFBLFFBQUEsVUFBQSxDQUNBLEdBQUEsR0FBQSxLQUFBLFFBQUEsVUFBQSxFQUFBLEVBQ0EsT0FBQSxHQUFBLElBQUEsSUFDQSxHQUFBLEVBQ0EsRUFBQSxHQUlBLE1BQUEsR0FNQSwwQkFDQSxLQUFBLFFBQUEsV0FDQSxPQUFBLEdBQUEsR0FDQSxNQUNBLEVBQUEsRUFBQSxPQUFBLEdBQUEsSUFDQSxvQkFWQSxlQUNBLEVBQUEsRUFBQSxPQUFBLEdBQUEsSUFDQSxtQkFXQSxPQUFBLFlBQ0EsVUFBQSxTQUFBLEVBQUEsR0FFQSxNQURBLEdBQUEsa0JBQUEsS0FBQSxFQUFBLEVBQUEsa0JBQUEsSUFDQSxJQUFBLEtBQUEsZ0JBQUEsUUFBQSxHQUFBLEtBQUEsVUFBQSxFQUFBLEdBQUEsTUFBQSxHQUVBLFNBQUEsS0FJQSxPQUFBLFdBQ0EsR0FBQSxHQUFBLElBQ0EsTUFBQSxTQUFBLElBQUEsSUFBQSxNQUVBLEtBQUEsVUFDQSxLQUFBLGNBQ0EsS0FBQSxnQkFVQSxJQUFBLEdBQUEsSUFBQSxJQUFBLGtCQUNBLEVBQUEsSUFBQSxJQUFBLHFCQUNBLEVBQUEsSUFBQSxJQUFBLGNBQ0EsRUFBQSxJQUFBLElBQUEsY0FFQSxFQUFBLEtBQUEsTUFDQSxNQUFBLGdCQUNBLE9BQUEsRUFDQSxTQUFBLEVBQ0EsU0FBQSxTQUFBLEdBR0EsTUFGQSxNQUFBLE9BQUEsR0FDQSxLQUFBLFNBQ0EsR0FDQSxLQUFBLEtBQUEsUUFDQSxRQUFBLEdBRUEsTUFBQSxTQUFBLEdBQUEsVUFBQSxXQUFBLEVBQUEsWUFFQSxFQUFBLFlBQUEsUUFBQSxXQUNBLEVBQUEsYUFDQSxFQUFBLGFBQUEsUUFDQSxFQUFBLGFBQUEsU0FFQSxFQUFBLE1BQUEsS0FBQSxZQUFBLGtCQUNBLEVBQUEsTUFBQSxLQUFBLFNBQUEscUJBRUEsRUFBQSxhQUFBLFNBQ0EsRUFBQSxhQUFBLFFBRUEsRUFBQSxNQUFBLEtBQUEsWUFBQSxtQkFDQSxFQUFBLE1BQUEsS0FBQSxTQUFBLHFCQUlBLEVBQUEsWUFBQSxRQUFBLFdBQ0EsRUFBQSxNQUFBLEtBQUEsU0FBQSxnQkFDQSxFQUFBLE1BQUEsS0FBQSxZQUFBLGVBQ0EsRUFBQSxNQUFBLEtBQUEsU0FBQSxtQkFFQSxFQUFBLE1BQUEsS0FBQSxTQUFBLGVBQ0EsRUFBQSxNQUFBLEtBQUEsWUFBQSxvQkFJQSxFQUFBLE9BQUEsT0FBQSxLQUFBLE9BQUEsYUFDQSxLQUFBLE9BQUEsYUFBQSxHQUFBLFNBQUEsV0FDQSxFQUFBLE9BQUEsT0FBQSxFQUFBLE9BQUEsa0JBSUEsZUFBQSxHQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNYXJrZG93bkVkaXRvciA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBNYXJrZG93bkVkaXRvci5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcyxjb25maWcpO1xufTtcbkV4dC5vdmVycmlkZShNT0R4LnBhbmVsLlJlc291cmNlLCB7fSk7XG5cbkV4dC5leHRlbmQoTWFya2Rvd25FZGl0b3IsRXh0LkNvbXBvbmVudCx7XG4gICAgaW5pdENvbXBvbmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIE1hcmtkb3duRWRpdG9yLnN1cGVyY2xhc3MuaW5pdENvbXBvbmVudC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIEV4dC5vblJlYWR5KHRoaXMucmVuZGVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICAsYnVpbGRVSTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudGV4dGFyZWEuc2V0RGlzcGxheWVkKCdub25lJyk7XG4gICAgICAgIHRoaXMudGV4dGFyZWEuc2V0V2lkdGgoMCk7XG4gICAgICAgIHRoaXMudGV4dGFyZWEuc2V0SGVpZ2h0KDApO1xuXG4gICAgICAgIHZhciB3cmFwcGVyID0gRXh0LkRvbUhlbHBlci5pbnNlcnRCZWZvcmUodGhpcy50ZXh0YXJlYSwge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzOiAnbWFya2Rvd24tY29udGFpbmVyJ1xuICAgICAgICB9KTtcblxuICAgICAgICBFeHQuRG9tSGVscGVyLmFwcGVuZCh3cmFwcGVyLHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBpZDogJ2NvbnRlbnQtbWQnLFxuICAgICAgICAgICAgY2xhc3M6IHRoaXMudGV4dGFyZWEuZG9tLmNsYXNzTmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICBFeHQuRG9tSGVscGVyLmFwcGVuZCh3cmFwcGVyLHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBpZDogJ3ByZXZpZXctbWQnLFxuICAgICAgICAgICAgY2xhc3M6ICdtYXJrZG93bi1ib2R5J1xuICAgICAgICB9KTtcblxuICAgICAgICBFeHQuRG9tSGVscGVyLmFwcGVuZCh3cmFwcGVyLHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBpZDogJ3Rvb2xib3gnLFxuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgaWQ6ICdwcmV2aWV3LWJ1dHRvbicsXG4gICAgICAgICAgICAgICAgaHRtbDogJzxpIGNsYXNzPVwiaWNvbiBpY29uLXRvZ2dsZS1vZmZcIj48L2k+IFByZXZpZXcnXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICBpZDogJ2Z1bGxzY3JlZW4tYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBodG1sOiAnPGkgY2xhc3M9XCJpY29uIGljb24tZXhwYW5kXCI+PC9pPidcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEV4dC5Eb21IZWxwZXIuYXBwZW5kKHdyYXBwZXIse1xuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBzdHlsZTogJ2NsZWFyOiBib3RoJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLHJlZ2lzdGVyQWNlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBhY2UuZWRpdChFeHQuRG9tUXVlcnkuc2VsZWN0Tm9kZSgnZGl2I2NvbnRlbnQtbWQnKSk7XG4gICAgICAgIHRoaXMuZWRpdG9yLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgbWF4TGluZXM6IEluZmluaXR5LFxuICAgICAgICAgICAgbWluTGluZXM6IDI1LFxuICAgICAgICAgICAgc2hvd1ByaW50TWFyZ2luOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lZGl0b3IucmVuZGVyZXIuc2V0U2hvd0d1dHRlcihmYWxzZSk7XG4gICAgICAgIHRoaXMuZWRpdG9yLmdldFNlc3Npb24oKS5zZXRWYWx1ZSh0aGlzLnRleHRhcmVhLmdldFZhbHVlKCkpO1xuICAgICAgICB0aGlzLmVkaXRvci5nZXRTZXNzaW9uKCkuc2V0TW9kZShcImFjZS9tb2RlL21hcmtkb3duXCIpO1xuICAgICAgICB0aGlzLmVkaXRvci5zZXRUaGVtZShcImFjZS90aGVtZS9tb25va2FpXCIpO1xuICAgIH1cblxuICAgICxsYW5ndWFnZU92ZXJyaWRlczoge1xuICAgICAgICBqczogJ2phdmFzY3JpcHQnXG4gICAgICAgICxodG1sOiAneG1sJ1xuICAgIH1cblxuICAgICxyZWdpc3Rlck1hcmtlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZGUgPSB0aGlzO1xuICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgbWFya2VkLlJlbmRlcmVyKCk7XG5cbiAgICAgICAgcmVuZGVyZXIuY29kZSA9IGZ1bmN0aW9uKGNvZGUsIGxhbmcsIGVzY2FwZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG91dCA9IHRoaXMub3B0aW9ucy5oaWdobGlnaHQoY29kZSwgbGFuZyk7XG4gICAgICAgICAgICAgICAgaWYgKG91dCAhPSBudWxsICYmIG91dCAhPT0gY29kZSkge1xuICAgICAgICAgICAgICAgICAgICBlc2NhcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9IG91dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghbGFuZykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnPHByZT48Y29kZT4nXG4gICAgICAgICAgICAgICAgKyAoZXNjYXBlZCA/IGNvZGUgOiBlc2NhcGUoY29kZSwgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgKyAnXFxuPC9jb2RlPjwvcHJlPic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAnPHByZT48Y29kZSBjbGFzcz1cImhsanMgJ1xuICAgICAgICAgICAgKyB0aGlzLm9wdGlvbnMubGFuZ1ByZWZpeFxuICAgICAgICAgICAgKyBlc2NhcGUobGFuZywgdHJ1ZSlcbiAgICAgICAgICAgICsgJ1wiPidcbiAgICAgICAgICAgICsgKGVzY2FwZWQgPyBjb2RlIDogZXNjYXBlKGNvZGUsIHRydWUpKVxuICAgICAgICAgICAgKyAnXFxuPC9jb2RlPjwvcHJlPlxcbic7XG4gICAgICAgIH07XG5cbiAgICAgICAgbWFya2VkLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgaGlnaGxpZ2h0OiBmdW5jdGlvbihjb2RlLCBsYW5nKXtcbiAgICAgICAgICAgICAgICBpZihtZGUubGFuZ3VhZ2VPdmVycmlkZXNbbGFuZ10pIGxhbmcgPSBtZGUubGFuZ3VhZ2VPdmVycmlkZXNbbGFuZ107XG4gICAgICAgICAgICAgICAgcmV0dXJuIChobGpzLmxpc3RMYW5ndWFnZXMoKS5pbmRleE9mKGxhbmcpICE9IC0xKSA/IGhsanMuaGlnaGxpZ2h0KGxhbmcsIGNvZGUpLnZhbHVlIDogY29kZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW5kZXJlcjogcmVuZGVyZXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZGUgPSB0aGlzO1xuICAgICAgICB0aGlzLnRleHRhcmVhID0gRXh0LmdldCgndGEnKTtcblxuICAgICAgICB0aGlzLmJ1aWxkVUkoKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckFjZSgpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyTWFya2VkKCk7XG5cblxuICAgICAgICAvLyBjb3B5IGJhY2sgdG8gdGV4dGFyZWEgb24gZm9ybSBzdWJtaXQuLi5cbiAgICAgICAgLy90ZXh0YXJlYS5jbG9zZXN0KCdmb3JtJykuc3VibWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgdGV4dGFyZWEudmFsKGVkaXRvci5nZXRTZXNzaW9uKCkuZ2V0VmFsdWUoKSk7XG4gICAgICAgIC8vfSk7XG5cblxuXG4gICAgICAgIHZhciBwcmV2aWV3QnV0dG9uID0gRXh0LmdldCgncHJldmlldy1idXR0b24nKTtcbiAgICAgICAgdmFyIGZ1bGxzY3JlZW5CdXR0b24gPSBFeHQuZ2V0KCdmdWxsc2NyZWVuLWJ1dHRvbicpO1xuICAgICAgICB2YXIgcHJldmlldyA9IEV4dC5nZXQoJ3ByZXZpZXctbWQnKTtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBFeHQuZ2V0KCdjb250ZW50LW1kJyk7XG5cbiAgICAgICAgdmFyIGRyb3BUYXJnZXQgPSBNT0R4LmxvYWQoe1xuICAgICAgICAgICAgeHR5cGU6ICdtb2R4LXRyZWVkcm9wJyxcbiAgICAgICAgICAgIHRhcmdldDogY29udGVudCxcbiAgICAgICAgICAgIHRhcmdldEVsOiBjb250ZW50LFxuICAgICAgICAgICAgb25JbnNlcnQ6IChmdW5jdGlvbihzKXtcbiAgICAgICAgICAgICAgICB0aGlzLmluc2VydChzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KS5iaW5kKHRoaXMuZWRpdG9yKSxcbiAgICAgICAgICAgIGlmcmFtZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5vbignZGVzdHJveScsIGZ1bmN0aW9uKCkge2Ryb3BUYXJnZXQuZGVzdHJveSgpO30pO1xuXG4gICAgICAgIHByZXZpZXdCdXR0b24uYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHByZXZpZXcuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3LnNldERpc3BsYXllZCgnbm9uZScpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0RGlzcGxheWVkKCdibG9jaycpO1xuXG4gICAgICAgICAgICAgICAgcHJldmlld0J1dHRvbi5jaGlsZCgnaScpLnJlbW92ZUNsYXNzKCdpY29uLXRvZ2dsZS1vbicpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdCdXR0b24uY2hpbGQoJ2knKS5hZGRDbGFzcygnaWNvbi10b2dnbGUtb2ZmJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXZpZXcuc2V0RGlzcGxheWVkKCdibG9jaycpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0RGlzcGxheWVkKCdub25lJyk7XG5cbiAgICAgICAgICAgICAgICBwcmV2aWV3QnV0dG9uLmNoaWxkKCdpJykucmVtb3ZlQ2xhc3MoJ2ljb24tdG9nZ2xlLW9mZicpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdCdXR0b24uY2hpbGQoJ2knKS5hZGRDbGFzcygnaWNvbi10b2dnbGUtb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVsbHNjcmVlbkJ1dHRvbi5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZnVsbHNjcmVlbkJ1dHRvbi5jaGlsZCgnaScpLmhhc0NsYXNzKCdpY29uLWV4cGFuZCcpKSB7XG4gICAgICAgICAgICAgICAgZnVsbHNjcmVlbkJ1dHRvbi5jaGlsZCgnaScpLnJlbW92ZUNsYXNzKCdpY29uLWV4cGFuZCcpO1xuICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW5CdXR0b24uY2hpbGQoJ2knKS5hZGRDbGFzcygnaWNvbi1jb21wcmVzcycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmdWxsc2NyZWVuQnV0dG9uLmNoaWxkKCdpJykuYWRkQ2xhc3MoJ2ljb24tZXhwYW5kJyk7XG4gICAgICAgICAgICAgICAgZnVsbHNjcmVlbkJ1dHRvbi5jaGlsZCgnaScpLnJlbW92ZUNsYXNzKCdpY29uLWNvbXByZXNzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByZXZpZXcudXBkYXRlKG1hcmtlZCh0aGlzLmVkaXRvci5nZXRWYWx1ZSgpKSk7XG4gICAgICAgIHRoaXMuZWRpdG9yLmdldFNlc3Npb24oKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHByZXZpZXcudXBkYXRlKG1hcmtlZChtZGUuZWRpdG9yLmdldFZhbHVlKCkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5NYXJrZG93bkVkaXRvciA9IG5ldyBNYXJrZG93bkVkaXRvcigpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==