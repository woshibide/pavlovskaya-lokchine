.PHONY: deploy publish

deploy:
	./deploy.sh $(filter-out $@, $(MAKECMDGOALS))

publish:
	git checkout publish
	git merge main
	git push origin publish
	git checkout main
